const express = require('express')

const PORT = 3000;
const app = express()


app.get('/',(req, res) => {
    res.send('Yash Anand Hu Mai ChooMantar!')
})

app.listen(PORT, () => {
    console.log(`Server is up and listening on PORT: ${PORT}`);
})
