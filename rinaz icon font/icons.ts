export type IconsId =
  | "3d"
  | "4k"
  | "ar"
  | "arrow-down-square"
  | "arrow-up-square"
  | "call"
  | "calling"
  | "chat"
  | "heart"
  | "home"
  | "info"
  | "iphone"
  | "location"
  | "mail"
  | "maximize"
  | "menu-left"
  | "menu-right"
  | "minimize"
  | "notification"
  | "play"
  | "search"
  | "setting"
  | "star"
  | "unlock"
  | "vr"
  | "x-circle"
  | "x";

export type IconsKey =
  | "i3d"
  | "i4k"
  | "Ar"
  | "ArrowDownSquare"
  | "ArrowUpSquare"
  | "Call"
  | "Calling"
  | "Chat"
  | "Heart"
  | "Home"
  | "Info"
  | "Iphone"
  | "Location"
  | "Mail"
  | "Maximize"
  | "MenuLeft"
  | "MenuRight"
  | "Minimize"
  | "Notification"
  | "Play"
  | "Search"
  | "Setting"
  | "Star"
  | "Unlock"
  | "Vr"
  | "XCircle"
  | "X";

export enum Icons {
  i3d = "3d",
  i4k = "4k",
  Ar = "ar",
  ArrowDownSquare = "arrow-down-square",
  ArrowUpSquare = "arrow-up-square",
  Call = "call",
  Calling = "calling",
  Chat = "chat",
  Heart = "heart",
  Home = "home",
  Info = "info",
  Iphone = "iphone",
  Location = "location",
  Mail = "mail",
  Maximize = "maximize",
  MenuLeft = "menu-left",
  MenuRight = "menu-right",
  Minimize = "minimize",
  Notification = "notification",
  Play = "play",
  Search = "search",
  Setting = "setting",
  Star = "star",
  Unlock = "unlock",
  Vr = "vr",
  XCircle = "x-circle",
  X = "x",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.i3d]: "61697",
  [Icons.i4k]: "61698",
  [Icons.Ar]: "61699",
  [Icons.ArrowDownSquare]: "61700",
  [Icons.ArrowUpSquare]: "61701",
  [Icons.Call]: "61702",
  [Icons.Calling]: "61703",
  [Icons.Chat]: "61704",
  [Icons.Heart]: "61705",
  [Icons.Home]: "61706",
  [Icons.Info]: "61707",
  [Icons.Iphone]: "61708",
  [Icons.Location]: "61709",
  [Icons.Mail]: "61710",
  [Icons.Maximize]: "61711",
  [Icons.MenuLeft]: "61712",
  [Icons.MenuRight]: "61713",
  [Icons.Minimize]: "61714",
  [Icons.Notification]: "61715",
  [Icons.Play]: "61716",
  [Icons.Search]: "61717",
  [Icons.Setting]: "61718",
  [Icons.Star]: "61719",
  [Icons.Unlock]: "61720",
  [Icons.Vr]: "61721",
  [Icons.XCircle]: "61722",
  [Icons.X]: "61723",
};
