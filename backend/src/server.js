const { app } = require('./index');
const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>{
  console.log(`Server is runnig on port ${PORT}`);
})