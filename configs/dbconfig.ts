import mongoose from 'mongoose';


const uri = process.env.MONGO_URI;

if (!uri) {
    throw new Error('MongoDB URI is not provided in the environment variables');
}

export async function connect() {
    try {
        mongoose.connect(uri!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }
}


const blogArticlesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    imgsrc: {
        type: String,
        required: [true, "Please provide an image url"],
    },
    avatar: {
        type: String,
        default: "/logo.png",
    },
    author: {
        type: String,
        default: "TechWatt",
    },
    date: {
        type: String,
        default: () => Date.now(),
    },
    category: {
        type: String,
        required: [true, "Please provide a category"],
    },
    detail: {
        type: String,
        required: [true, "Please provide details"],
    },
})

export const blogSchema = mongoose.models.blogArticles || mongoose.model("blogArticles", blogArticlesSchema);


const projects = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title."]
    },
    description: {
        type: String,
        required: [true, "Please provide a description."]
    },
    src: {
        type: String,
        required: [true, "Please provide a demo source."]
    },
})

export const projectsSchema = mongoose.models.projects || mongoose.model("projects", projects);


const services = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title."]
    },
    description: {
        type: String,
        required: [true, "Please provide a description."]
    },
    imgsrc: {
        type: String,
        required: [true, "Please provide a demo source."]
    },
})

export const servicesSchema = mongoose.models.services || mongoose.model("services", services);


const techStack = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title."]
    },
    imgsrc: {
        type: String,
        required: [true, "Please provide a demo source."]
    },
})

export const techStackSchema = mongoose.models.techStack || mongoose.model("techStack", techStack);


const certs = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title."]
    },
    imgsrc: {
        type: String,
        required: [true, "Please provide a demo source."]
    },
})

export const certsSchema = mongoose.models.certs || mongoose.model("certs", certs);