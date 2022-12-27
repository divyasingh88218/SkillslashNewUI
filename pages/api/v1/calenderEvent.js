
// import {dataD} from "../../../components/Form/Form"

export default async function handler(req, res) {
    const { name, email, dateTime} = req.body;
    if(req.method==="POST"){
        console.log(req.body,"req")
        res.status(200).json({ name , email, dateTime});
       
}
if(req.method==="GET"){
    res.status(200).json({ name:"jhon" });
}
}