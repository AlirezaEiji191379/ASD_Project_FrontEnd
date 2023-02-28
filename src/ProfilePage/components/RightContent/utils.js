export const isValidEmail = (value) => {
    return !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,64}$/i.test(value))
}

/**
 * Format Phone Number
 */
export const formatPhoneNumber = (value) => {
    if (!value) return
    const currentValue = value.replace(/[^\d]/g, '');
    const mobileNoLength = currentValue.length;
    if (mobileNoLength >=7) {
        if (mobileNoLength < 4) return currentValue;
        if (mobileNoLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    } else{
        return currentValue;
    }
}