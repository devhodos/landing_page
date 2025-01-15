import Joi from 'joi';

export const registerValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(100).required(),
        email: Joi.string().email().required(),
        message: Joi.string().min(10).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
            error: error.details[0].message
        });
    }

    next();
};



export const internValidation = (req, res, next) => {
    
    const schema = Joi.object({
        name: Joi.string().min(5).max(100).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().min(10).max(10).required(),
        education: Joi.string().required(),
        dept: Joi.string().required(),
        req_exp: Joi.string().allow(''),
    });

    const { error } = schema.validate(req.body);
    
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
            error: error.details[0].message
        });
    }

    next();
};

