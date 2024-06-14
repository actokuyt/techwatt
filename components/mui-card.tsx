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
  height: number;
  author: string;
  avatar: string;
  date: string;
  category: string;
}

interface ServicesCardsProp {
  img: string;
  title: string;
  description: string;
  height: number;
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
  height,
  avatar,
  author,
  date,
  category,
}: ArticleCardsProp) {
  return (
    <Card className="newsreader">
      <CardMedia
        component="img"
        image={img}
        alt={title}
        sx={{ height: { height } }}
      />
      <CardContent>
        <div className="mb-4" >
          <div className="flex items-center">
            <Avatar alt="" src={avatar} />
            <div>
              <p className="font-semibold leading-[1em]"> {author}</p>

              <p className="text-sm leading-[1em]">{date}</p>
            </div>
          </div>
          <Typography
            variant="body2"
            className="newsreader"
          >
            {category}
          </Typography>
        </div>
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
      <CardActions>
        <button >Share</button>
        <Link href={`/blog/${id}`}>Learn More</Link>
      </CardActions>
    </Card>
  );
}

export function ServicesCards({
  img,
  title,
  description,
  height,
}: ServicesCardsProp) {
  return (
    <Card className="newsreader">
      <CardMedia
        component="img"
        image={img}
        alt={title}
        sx={{ height: { height } }}
      />
      <CardContent>
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

export function IframeCards({ src, title, description }: IframeCardsProp) {
  return (
    <Card className="newsreader">
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
