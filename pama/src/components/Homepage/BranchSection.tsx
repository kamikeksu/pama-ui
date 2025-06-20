import PamaMapEmbed from "../common/PamaMapEmbed";

export function BranchSection() {
  return (
    <section className="h-fit mb-8">
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mt-10">
        <h2 className="text-green-900 text-2xl py-4 border-y-2 border-orange-400 text-center px-4 mb-6 font-bold">
          Vị trí khách sạn
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <PamaMapEmbed />
      </div>
    </section>
  );
}

export default BranchSection;
