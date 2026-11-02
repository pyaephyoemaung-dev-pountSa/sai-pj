import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"

const RatingCard = ({rating}:{rating : number}) => {
  return (
    <div className=" flex space-x-5 items-center ">
    <span className="flex text-blue-400">
      {rating >= 1 ? (
        <IconStarFilled />
      ) : rating >= 0.5 ? (
        <IconStarHalfFilled />
      ) : (
        <IconStar />
      )}
      {rating >= 2 ? (
        <IconStarFilled />
      ) : rating >= 1.5 ? (
        <IconStarHalfFilled />
      ) : (
        <IconStar />
      )}
      {rating >= 3 ? (
        <IconStarFilled />
      ) : rating >= 2.5 ? (
               <IconStarHalfFilled />
        ) : (
          <IconStar />
        )}
        {rating >= 4 ? (
          <IconStarFilled />
        ) : rating >= 3.5 ? (
          <IconStarHalfFilled />
        ) : (
          <IconStar />
        )}
        {rating >= 5 ? (
          <IconStarFilled />
        ) : rating >= 4.5 ? (
          <IconStarHalfFilled />
        ) : (
          <IconStar />
        )}
      </span>
    </div>
  )
}

export default RatingCard