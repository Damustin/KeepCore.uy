import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "Excelente servicio!",
    content:
      "lo que más me gusta es la facilidad de uso y la rapidez de respuesta.",
    author: "Juan Perez",
    designation: "Founder @ Company",
  },
  {
    rating: 5,
    title: "Grandes personas",
    content:
      "lo que más me gusta es la facilidad de uso y la rapidez de respuesta ademas del contacto humano ",
    author: "CEO @ Globant",
    designation: "Globant",
  },
  {
    rating: 5,
    title: "Me solucionaron todo",
    content:
      "Tenia serios problemas con mi red y ellos me solucionaron todo",
    author: "Studios X",
    designation: "Cliente",
  },
  {
    rating: 4,
    title: "Muy satisfecho",
    content:
      "La rapidez de respuesta y la facilidad de uso me gustaron mucho",
    author: "Logistica SRL",
    designation: "Manager @ AB Company",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          Algunos feedbacks de nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
