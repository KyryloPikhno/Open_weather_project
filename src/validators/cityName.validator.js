import Joi from "joi";

const cityNameValidator = Joi.object({
    query: Joi.string().regex(/^[a-z A-Zа-яёЁіІЇї]{1,20}$/).required().messages({
        'string.pattern.base':'only letters. Min 1, max 20'
    })
});

export {cityNameValidator}