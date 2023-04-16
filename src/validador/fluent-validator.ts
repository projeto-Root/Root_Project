let errors: { message: string }[] = [];

class ValidationContract {
    constructor() {
        errors = [];
    }
    public isRequired(value: any, message: string): void {
        if (!value || value.length <= 0)
            errors.push({ message: message });
    }

    public hasMinLen(value: any, min: number, message: string): void {
        if (!value || value.length < min)
            errors.push({ message: message });
    }

    public hasMaxLen(value: any, max: number, message: string): void {
        if (!value || value.length > max)
            errors.push({ message: message });
    }

    public isFixedLen(value: any, len: number, message: string): void {
        if (value.length != len)
            errors.push({ message: message });
    }

    public isEmail(value: any, message: string): void {
        var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(value))
            errors.push({ message: message });
    }

    public errors(): { message: string }[] {
        return errors;
    }

    public clear(): void {
        errors = [];
    }

    public isValid(): boolean {
        return errors.length == 0;
    }
}

export default ValidationContract;