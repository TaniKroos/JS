const zod = require('zod');
function validate(obj){
    const schema = zod.object({
        email: zod.string().email()
    })
    const re = schema.safeParse(obj);
    console.log(re);
}

validate({
    email: "kroos@gmai.com"
});


