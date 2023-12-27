const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://aayush13:cseisLOVE@cluster0.c7n8ufu.mongodb.net/')

app.post('/api/signup', async (req, res) => {
	console.log(req.body)
	try{
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			username: req.body.username,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status:200 })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return res.status(401).json({error:'Invalid username or Password'});
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				username: user.username,
				email: user.email,
			},
			'secret123'
		)

		return res.status(200).json({message:'Login successful'})
	} else {
		return res.status(401).json({error:'Invalid username or Password'});
	}
})
//forgot password
app.post('/api/forgot-password', async (req, res) => {
	const {email}=req.body;
	User.findOne({email:email})
	.then(user=>{
		if(!user){
			return res.send({Status:"Username does not exit"});
		}
		const token = jwt.sign({id:user._id},"secret123",{expiresIn:"1d"})
		var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: '077bel001.aayush@pcampus.edu.np',
        pass: 'ektuis@Love98'
       }
        });

        var mailOptions = {
            from: '077bel001.aayush@pcampus.edu.np',
            to:email,
            subject: 'Reset Your Password',
            text: `http://localhost:3000/reset-password/${user._id}/${token}`
        };

        transporter.sendMail(mailOptions, function(error, info){
       if (error) {
           console.log(error);
      } else {
          return res.send({Status:"Success"});
      }
    }); 

	})	
})

app.post('/api/reset-password/:id/:token',(req,res)=>{
	const {id,token}=req.params
	const {password}=req.body

	jwt.verify(token,"secret123",(err,decoded)=>{
		if(err){
			return res.json({status:"Error with token"})
		}
		else{
			bcrypt.hash(password,10)
			.then(hash=>{
				User.findByIdAndUpdate({_id:id},{password:hash})
				.then(u => res.send({Status:"Success"}))
				.catch(err => res.send({Status:err}))
			})
			.catch(err=> console.log(err))
		}
	})
})

app.listen(8000, () => {
	console.log('Server started on 8000')
})



