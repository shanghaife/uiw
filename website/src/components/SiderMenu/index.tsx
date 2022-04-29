import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './index.module.less';
import nav from '../icons/nav';
import { useTranslation } from 'react-i18next';
import { LayoutMenuType } from 'locale/menu/layoutMenuType';
import i18n, { DefLan } from 'react-i18next-config';

export default function SiderMenu() {
  const location = useLocation();
  const { t: trans } = useTranslation();
  const menu = JSON.parse(trans('menu'));
  const data: LayoutMenuType = menu.find((item: LayoutMenuType) =>
    new RegExp(`^${item.path || ''}`).test(location.pathname),
  );

  if (!data?.children) {
    return null;
  }

  // const urlSuffix = i18n.language === DefLan ? '' : `${i18n.language.toLowerCase()}/`;

  return (
    <div className={styles.wapper}>
      <h2 className={styles.title}>
        {(nav as any)[data.icon]}
        <span>{data.name}</span>
      </h2>
      <div className={styles.menu}>
        {data.children &&
          data.children.map((item, idx) => {
            if (item.divider) {
              return (
                <div key={idx} className={styles.divider}>
                  {item.name}
                </div>
              );
            }
            if (/^http(?:|s):\/\//.test(item.path || '')) {
              return (
                <a key={idx} href={item.path} target="__blank">
                  {item.name}
                  <svg viewBox="0 0 1024 1024" width={14}>
                    <path d="M821.1456 276.8384c-235.9296 25.1392-449.1776 226.7136-490.5472 452.352a38.4 38.4 0 1 1-75.5712-13.824c45.568-248.576 269.312-468.48 526.6944-510.6688l-117.8112-69.1712a38.4 38.4 0 0 1 38.912-66.2528l223.3344 131.1744a38.4 38.4 0 0 1 10.1376 57.6l-170.752 206.6432a38.4 38.4 0 1 1-59.1872-48.9472l114.7904-138.9056z" />
                    <path d="M832 620.0832a38.4 38.4 0 0 1 76.8 0v158.208c0 85.9648-61.5936 157.8496-140.8 157.8496H204.8c-79.2064 0-140.8-71.8848-140.8-157.9008V300.3904c0-86.016 61.5936-157.8496 140.8-157.8496h220.2112a38.4 38.4 0 1 1 0 76.8H204.8c-33.8944 0-64 35.072-64 81.0496V778.24c0 45.9776 30.1056 81.1008 64 81.1008h563.2c33.8944 0 64-35.1232 64-81.1008v-158.1568z" />
                  </svg>
                </a>
              );
            }
            return (
              <NavLink key={idx} to={item.path || ''} replace>
                {item.name}
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}
