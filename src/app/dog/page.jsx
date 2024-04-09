import { getDogService } from "@/services/product.service";

const DogPage = async () => {
  const dogImage = await getDogService();
  return (
    <main>
      <h1>Dog Page</h1>
    </main>
  );
};

export default DogPage;
