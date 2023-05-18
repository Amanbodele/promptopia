import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET=async (request,{params})=>{
    try {
        await connectToDB();

        const prompts = await Prompt.find({
            creator:params.id
        }).populate("creator");

        return new Response(JSON.stringify(prompts));

    } catch (error) {
        return new Response("Failed to fetch prompts created by user",{status:500})
    }
}