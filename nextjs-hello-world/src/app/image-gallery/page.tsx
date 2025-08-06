import Link from "next/link";

export default function ImageGallery() {
  const photoIds = [33, 452, 323, 57, 89, 78];
  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="grid grid-cols-[200px_200px_200px] gap-2 ">
        {photoIds.map((id) => (
          <Link key={id} href={`/image-gallery/${id}`}>
            <img src={`https://picsum.photos/id/${id}/200`} alt="stock image" />
          </Link>
        ))}
      </div>
    </div>
  );
}
