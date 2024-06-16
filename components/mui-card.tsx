import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Avatar } from "@mui/material";
import Iframe from "./iframe";
import Link from "next/link";

interface ArticleCardsProp {
  id: string;
  img: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  category: string;
}

interface ServicesCardsProp {
  img: string;
  title: string;
  description: string;
}

interface IframeCardsProp {
  src: string;
  title: string;
  description: string;
}

export function ArticleCards({
  id,
  img,
  title,
  description,
  avatar,
  author,
  date,
  category,
}: ArticleCardsProp) {  
  return (
    <Card className="p-2">
      <CardMedia
        component="img"
        image={img}
        alt={title}
        className="h-[250px] mb-4"
      />
      <CardContent>
        <div className="mb-4" >
          <div className="flex items-center">
            <Avatar alt="" src={avatar} />
            <div className="ml-2">
              <p className="font-semibold leading-[1em]"> {author}</p>

              <p className="text-sm leading-[1em]">{date}</p>
            </div>
          </div>
          <p
            className="p-2 font-semibold leading-[1em]"
          >
            {category}
          </p>
        </div>
        <h1
          className="text-xl font-semibold"
        >
          {title}
        </h1>
        <p
          className=""
        >
          {description}
        </p>
      </CardContent>
      <CardActions className="mt-4">
        <Link href={`/blog/${id}`} className="underline">Learn More</Link>
      </CardActions>
    </Card>
  );
}

export function ServicesCards({
  img,
  title,
  description,
}: ServicesCardsProp) {
  return (
    <Card className="p-2">
      <CardMedia
        component="img"
        image={img}
        alt={title}
        className="h-[250px] mb-4"
      />
      <CardContent>
        <h1
          className="text-xl font-semibold"
        >
          {title}
        </h1>
        <Typography
          variant="body2"
          color="text.secondary"
          className="newsreader"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function IframeCards({ src, title, description }: IframeCardsProp) {
  return (
    <Card className="p-2">
      <CardContent>
        <Iframe src={src} title={title} className="w-full h-[15em] mb-4 z-20" />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="newsreader"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="newsreader"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
