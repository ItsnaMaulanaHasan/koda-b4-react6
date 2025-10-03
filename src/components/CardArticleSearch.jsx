import moment from "moment";

function CardArticleSearch({ articleData }) {
  const { creator } = articleData;
  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-5 flex-1">
        <div className="flex items-center gap-3">
          <div className="overflow-hidden rounded-full h-6 w-6">
            <img className="h-full w-full object-cover" src={creator.avatar} alt={creator.name} />
          </div>
          <div className="text-[#6B6B6B] text-sm">{creator.name}</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl ">{articleData.title}</h1>
          <p className="line-clamp-2 sm:line-clamp-3 text-sm sm:text-base text-gray-600">{articleData.preview}</p>
        </div>
        <span className="text-sm text-[#6B6B6B]">{moment(articleData.publishedAt).fromNow()}</span>
      </div>
      <div className="w-28 sm:w-32 md:w-40 flex-shrink-0">
        <img className="aspect-3/2 object-cover" src={articleData.image} alt={articleData.title} />
      </div>
    </div>
  );
}

export default CardArticleSearch;
