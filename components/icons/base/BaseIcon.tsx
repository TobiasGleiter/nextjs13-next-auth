import { SiGithub, SiNextdotjs } from 'react-icons/si';

const ICONS_MAP: any = {
  Nextjs: <SiNextdotjs />,
  Github: <SiGithub />,
};

export interface IBaseIcon {
  icon: string;
  style?: string;
}

const BaseIcon: React.FC<IBaseIcon> = ({ icon, style }) => {
  let IconComponent = ICONS_MAP[icon].type;

  return <IconComponent className={style} />;
};

export default BaseIcon;
