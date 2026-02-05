import { CONFIG } from "@/shared/model/config";

function BoardsListPage() {
  return <div>Boards list {CONFIG.API_BASE_URL}</div>;
}

export const Component = BoardsListPage;
