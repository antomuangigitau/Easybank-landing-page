import React from 'react';
import { companyInfo, companyInfo2 } from '../data';
import styles from '../../styles/CompanyLinks.module.css';
const CompanyLinks = () => {
  return (
    <>
      <ul className={styles['contact__links']}>
        {companyInfo.map((info) => {
          const { id, link, title } = info;
          return (
            <li className={styles['contact__list']} key={id}>
              <a className={styles['contact__link']} href={link}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={styles['contact__links']}>
        {companyInfo2.map((info) => {
          const { id, link, title } = info;
          return (
            <li className={styles['contact__list']} key={id}>
              <a className={styles['contact__link']} href={link}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CompanyLinks;
