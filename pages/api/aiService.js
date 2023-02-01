const generateItemDescription = async ( {itemName, category, numWords, tone, keyWords}) => {
  try {
    const response = await fetch(  "https://api.openai.com/v1/engines/text-davinci-003/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `Write an item description for ${itemName} 
            ${category ? `in the ${category}` : ""} that is around ${
          numWords || 200
        } words in a ${tone || "neutral"} tone.
            ${keyWords ? `Incoprate the following keywords :${keyWords}.` : ""}.
            The description should be described in a way that is SEO friendly, highlighting its unique features and benefits

            
            `,
        max_tokens: 100,
        temperature: 0.5,
      }),
    });

    const data = await response.json();



    return data.choices[0].text;
  } catch (err) {
    console.log(err);
  }
};


export default async function serviceHandler (req,res){

    



    const {itemName, Category, numWords, tone, keyWords} = req.body

    const itemDescriptionResult = await generateItemDescription( {itemName, Category, numWords, tone, keyWords})

    res.status(200).json({
        itemDescriptionResult
    })



}