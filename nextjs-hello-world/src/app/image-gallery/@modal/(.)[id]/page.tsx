import { Modal } from "@/components/ui/modal";

export default async function InterceptedImage({ params }) {
  const { id } = await params;
  return (
    <Modal>
      <img src={`https://picsum.photos/id/${id}/400`} />
    </Modal>
  );
}
