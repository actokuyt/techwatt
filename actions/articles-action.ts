import { blogSchema, connect } from "@/configs/dbconfig";

connect();

type ArticleType = {
  id?: string;
  title: string;
  description: string;
  category: string;
  imgsrc: string;
  detail: string;
};

type EditPropType = {
  id:string;
  article:ArticleType
}

export async function fetchArticles() {
  try {
    const data = await blogSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}

export async function AddNewArticle(article: ArticleType) {
  try {
    await blogSchema.create({
      title: article.title,
      description: article.description,
      category: article.category,
      imgsrc: article.imgsrc,
      detail: article.detail,
    });
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function EditArticle({id, article}:EditPropType) {
  try {
    await blogSchema.findByIdAndUpdate(id, {
      $set: {
        title: article.title,
        desc: article.description,
        category: article.category,
        imgsrc: article.imgsrc,
        detail: article.detail,
      },
    });
  } catch (error: any) {
    console.error(error);
  }
}

export async function DeleteArticle(id:string) {
  try {
    await blogSchema.findByIdAndDelete(id);
  } catch (error:any) {
    console.error(error)
  }
}