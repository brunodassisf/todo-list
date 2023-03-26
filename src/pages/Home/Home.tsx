import AddTask from "../../module/AddTask";

export default function Home() {
  return (
    <div className="container mx-auto h-full">
      <div className="grid grid-cols-4 divide-x-4 divide-green-200  h-full">
        <div className="col-span-3">Home</div>
        <AddTask />
      </div>
    </div>
  );
}
