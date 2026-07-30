import UploadScene from "./scenes/UploadScene";
import ProcessingScene from "./scenes/ProcessingScene";
import RiskScene from "./scenes/RiskScene";
import DashboardScene from "./scenes/DashboardScene";
import ChatScene from "./scenes/ChatScene";

export const SCENE_MAP = {
  upload: UploadScene,
  processing: ProcessingScene,
  risk: RiskScene,
  dashboard: DashboardScene,
  chat: ChatScene,
} as const;