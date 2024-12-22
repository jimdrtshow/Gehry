import { CreateService } from "@/action/admin/services/action";

export default function page() {
  return (
    <div className="w-full h-auto p-5">
      <form action={CreateService} className="bg-my_color_7 p-5">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="Description" />
        <input type="text" name="image" placeholder="image" />
        <button type="submit">envoyer</button>
      </form>
    </div>
  );
}
