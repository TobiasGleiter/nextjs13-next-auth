import { ImSpinner9 } from 'react-icons/im';
import { SiGithub, SiNextdotjs } from 'react-icons/si';

const ICONS_MAP: any = {
  nextjs: <SiNextdotjs />,
  github: <SiGithub />,
  spinner: <ImSpinner9 />,
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
