import {createPrinter, Decorator, getDecorators, MethodDeclaration, Printer, TextRange} from "typescript";

export type ExpressionElementType = {
    text: string;
};

export interface ExpressionArgumentType extends TextRange {
    text: string;
    elements: Array<ExpressionElementType>;
}

export type ExpressionType = {
    expression: {
        escapedText: string;
    };
    arguments: Array<ExpressionArgumentType>;
};

export abstract class CodeHelper {

    protected printer: Printer = createPrinter();

    protected getStepTexts(method: MethodDeclaration): Array<string> {
        const dec = getDecorators(method)

        if (!dec) {
            return []
        }

        const stepDecExp = (dec.filter(CodeHelper.isStepDecorator)[0]
            .expression as unknown) as ExpressionType;
        const arg = stepDecExp.arguments[0];

        if (!arg.text && arg.elements) {
            return arg.elements.map((e) => {
                return e.text;
            });
        }

        return [arg.text];
    }

    protected static isStepDecorator(d: Decorator): boolean {
        const decExp = (d.expression as unknown) as ExpressionType;

        return decExp.expression.escapedText === "Step";
    }

    protected hasStepDecorator(method: MethodDeclaration): boolean {
        const dec = getDecorators(method)
        if (dec) {
            return !!dec && dec.some(CodeHelper.isStepDecorator);
        }
        return false;
    }

    protected hasStepText(method: MethodDeclaration, stepText: string): boolean {
        const dec = getDecorators(method)
        
        if (dec) {
            const stepDecExp = (dec.filter(CodeHelper.isStepDecorator)[0]
            .expression as unknown) as ExpressionType;
            const arg = stepDecExp.arguments[0];

            if (!arg.text && arg.elements) {
                return arg.elements.some((e) => {
                    return e.text === stepText;
                });
            }

            return arg.text === stepText;
        }

        return false;
    }

}
