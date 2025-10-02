import moment from "moment";

function CardArticle({ articleData }) {
  return (
    <div className="flex flex-col gap-3">
      <img className="w-full h-1/2" src={articleData.image} alt={articleData.creator.name} />
      <h1 className="font-semibold text-4xl">{articleData.title}</h1>
      <p className="line-clamp-3">{articleData.content}</p>
      <div className="flex gap-2 items-center text-[#6B6B6B] text-sm">
        <img className="rounded-full overflow-hidden h-5 w-5" src={articleData.creator.avatar} alt={articleData.creator.name} />
        <div>{articleData.creator.name}</div>•<div>{moment(articleData.publishedAt).format("MMM DD")}</div>•<div>{articleData.readTime} min read</div>
      </div>
    </div>
  );
}

export default CardArticle;
