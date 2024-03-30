"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// used for creating server side actions

function isInvalidText(text) {
  return !text || text.trim() === "";
}

async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Error: Invalid input.",
    };
  }
  await saveMeal(meal);
  // revalidatePath("/", "layout"); // will revalidate all pages of entire website
  revalidatePath("/meals"); // will revalidate the meal caches when data changes
  redirect("/meals");
}

export { shareMeal };
