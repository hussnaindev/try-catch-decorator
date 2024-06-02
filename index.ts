/**
 * A decorator that wraps a method with a try-catch block. If an error is thrown,
 * it will be caught and re-thrown.
 *
 * @param {Object} target - The prototype of the class.
 * @param {string} propertyKey - The name of the method being decorated.
 * @param {PropertyDescriptor} descriptor - The property descriptor for the method.
 * @returns {PropertyDescriptor} The modified property descriptor.
 */
export function tryCatch(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<any> {
        try {
            return await originalMethod.apply(this, args);
        } catch (error) {
            throw error;
        }
    };

    return descriptor;
}
