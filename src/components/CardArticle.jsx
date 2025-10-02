import moment from "moment";

function CardArticle({ articleData }) {
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="w-full h-[200px] overflow-hidden">
        <img className="w-full h-full object-cover" src={articleData.image} alt={articleData.title} />
      </div>
      <h1 className="font-semibold text-4xl">{articleData.title}</h1>
      <p className="line-clamp-2 sm:line-clamp-3 text-sm sm:text-base text-gray-600">{articleData.content}</p>
      <div className="flex gap-2 items-center text-[#6B6B6B] text-sm">
        <img className="rounded-full h-5 w-5 object-cover" src={articleData.creator.avatar} alt={articleData.creator.name} />
        <span>{articleData.creator.name}</span>
        <span>•</span>
        <span>{moment(articleData.publishedAt).format("MMM DD")}</span>
        <span>•</span>
        <span>{articleData.readTime} min read</span>
      </div>
    </div>
  );
}

export default CardArticle;
