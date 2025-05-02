import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { format } from 'date-fns';

export default function NewsCard({ news }) {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags = [],
  } = news;

  return (
    <div className="bg-white shadow-md  rounded-xl p-4 w-full  mx-auto space-y-3">
      {/* Header */}
      <div className="flex bg-base-200 justify-between items-center text-sm text-gray-500 p-2 rounded-2xl">
        <div className="flex  items-center space-x-2">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-800">{author?.name}</p>
            <p className="text-xs">
              {format(new Date(author?.published_date), 'PPP')}
            </p>
          </div>
        </div>
      <div className='flex gap-3'>
      <FaRegBookmark className="text-gray-600 cursor-pointer hover:text-blue-700" />
      <FiShare2 className="text-gray-600 cursor-pointer hover:text-blue-700" />
      </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg text-gray-900">{title}</h2>

      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img src={thumbnail_url} alt="news" className="w-full object-cover" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs text-white">
        {tags.map((tag) => (
          <span key={tag} className="bg-blue-500 px-2 py-0.5 rounded">
            #{tag}
          </span>
        ))}
      </div>

      {/* Details */}
      <div className="text-sm text-gray-600 line-clamp-4">
        {details.length > 200 ? (
            <>
            {details.slice(0, 200)}...
            <span className="text-blue-600 font-medium cursor-pointer">Read More</span>
            
            </>
        ): (
            details
        )} 
      </div>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center text-sm text-gray-500 pt-2">
        <div className="flex items-center space-x-1 text-orange-400">
          <FaStar />
          <span className="text-gray-800">{rating?.number}</span>
          <span className="text-xs ml-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 capitalize">
            {rating?.badge}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
