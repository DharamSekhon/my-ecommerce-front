import {mongooseConnect} from "@/lib/mongoose";
// import {getServerSession} from "next-auth";
// import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Address} from "@/models/Address";

export default async function handle(req, res){
    // if (req.method !== 'POST') {
    //     return res.status(405).end(); //method not allowed
    //   }
      try {
        await mongooseConnect();
        // const address = await Address.findOne({email});
        // if (address) {
        //     return res.status(400).json({ message: 'User already exists with this email.' });
        // } else {
            const newAddress = new Address({email, ...req.body});
            await newAddress.save();
            res.status(201).json({ message: 'Registration successful.' });
            window.alert('Data Saved');
        //   res.json(await Address.create());
        // };
        
      } catch{
        
        console.log('Error in Saving User');
        
      }
}
 


    
//   const {user} = await getServerSession(req, res, authOptions);

//   if (req.method === 'PUT') {
//     const address = await Address.findOne({userEmail:user.email});
//     if (address) {
//       res.json(await Address.findByIdAndUpdate(address._id, req.body));
//     } else {
//       res.json(await Address.create({userEmail:user.email, ...req.body}));
//     }
//   }
//   if (req.method === 'GET') {
//     const address = await Address.findOne({userEmail:user.email});
//     res.json(address);
//   }
// }


