import React, { useState } from "react";
import {AiFillCopy} from 'react-icons/ai'


const FormContainer = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    keyWords: "",
    tone: "",
    numWords: "",
  
  });

  const [isCopied, setIsCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [itemDescription, setItemDescription] = useState("")

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true)
    const res  = await fetch('/api/aiService',{
      method:'POST',
     headers:{
      "Content-Type":"application/json"
     } ,
     body:JSON.stringify(formData)

    },
 
    )

    setIsGenerating(false)

    const data = await res.json()

    



    setItemDescription(data.itemDescriptionResult?.trim())

  
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(itemDescription);
    setIsCopied(true);
    toast.success('Copied to clipboard.')
  };

 



  return (
    <div className="flex flex-col m-8  space-y-8  md:space-y-0 md:flex-row md:space-x-16 mx-auto justify-center">
      <div class="">

        <form>
          <div class="form-group mb-6">
            <div className="text-lg text-slate-600 mb-8">
              Create Catchy Item Descriptions for your business in Seconds.
            </div>
            <input
              onChange={handleOnChange}
              value={formData.itemName}
              type="text"
              name="itemName"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        mb-8
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Item Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
            value={formData.category}
              onChange={handleOnChange}
              type="text"
              name="category"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-8
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Category (Optional)"
            />
          </div>
          <div class="form-group mb-6">
            <textarea
            value={formData.keyWords}
              onChange={handleOnChange}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-8
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        
      "
              rows="4"
              name="keyWords"
              placeholder="Key Words for AI (Optional)"
            ></textarea>
            <select
            value={formData.tone}
              className="block w-full rounded-md bg-white border mb-8  border-indigo-500  text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2"
              name="tone"
              id="tone"
              onChange={handleOnChange}
            >
              <option value="default">Select Tone (Optional)</option>
              <option value="casual">Casual</option>
              <option value="friendly">Friendly</option>
              <option value="professional">Professional</option>
              <option value="formal">Formal</option>
            </select>

            <div className="flex flex-col">
              <label htmlFor="words" className="sr-only">
                Words (Optional)
              </label>
              <input
              value={formData.numWords}
                onChange={handleOnChange}
                type="number"
                className="block w-full rounded-md bg-white border border-indigo-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="Number Of Words - Default 200 (Optional)"
                name="numWords"
             
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isGenerating==='true'}
            type="submit"
            className={`
            ${isGenerating?'cursor-not-allowed':""}
      w-full
      px-6
      py-2.5
      bg-gradient-to-r from-pink-600 to-purple-700
      text-white
      font-medium
      
      
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out`}
          >
          {isGenerating?"Please wait...":'  Generate Item Description'}
          </button>
        </form>
      </div>
      <div className="flex flex-col w-full md:max-w-lg">
        <label htmlFor="output" className="sr-only">
          Output
        </label>
        <textarea
          rows={itemDescription === "" ? 8 : itemDescription?.split("\\n").length + 12}
          name="output"
          onChange={(e) => setItemDescription(e.target.value)}
          value={itemDescription}
          disabled={itemDescription === ""}
          id="output"
         
          placeholder="AI Generated Item Description"
          className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
        />
        <button

        onClick={handleCopy}
         disabled={formData.itemName === ""}
          type="submit"
          className=" 
      w-full
      px-6
      py-2.5
      bg-gradient-to-r from-pink-600 to-purple-700
      text-white
      font-medium
      
      
      rounded
      shadow-md
     
     "
        >
      <span className="inline-block"><AiFillCopy/></span> {isCopied ? "Copied" : "Copy to Clipboard"}
        </button>
      </div>

    </div>
  );
};

export default FormContainer;
