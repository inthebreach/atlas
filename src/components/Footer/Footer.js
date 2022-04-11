import * as MENUS from 'constants/menus';

import appConfig from 'app.config';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { NavigationMenu } from 'components';

import styles from './Footer.module.scss';

/**
 * The Blueprint's Footer component
 * @return {React.ReactElement} The Footer component.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {appConfig?.socialLinks && (
          <div className={styles['social-links']}>
            <ul aria-label="Social media">
              {appConfig.socialLinks?.twitterUrl && (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['social-icon-link']}
                    href={appConfig.socialLinks.twitterUrl}
                  >
                    <FaTwitter
                      title="Twitter"
                      className={styles['social-icon']}
                    />
                  </a>
                </li>
              )}

              {appConfig.socialLinks?.facebookUrl && (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['social-icon-link']}
                    href={appConfig.socialLinks.facebookUrl}
                  >
                    <FaFacebookF
                      title="Facebook"
                      className={styles['social-icon']}
                    />
                  </a>
                </li>
              )}

              {appConfig.socialLinks?.instagramUrl && (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['social-icon-link']}
                    href={appConfig.socialLinks.instagramUrl}
                  >
                    <FaInstagram
                      title="Instagram"
                      className={styles['social-icon']}
                    />
                  </a>
                </li>
              )}

              {appConfig.socialLinks?.youtubeUrl && (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['social-icon-link']}
                    href={appConfig.socialLinks.youtubeUrl}
                  >
                    <FaYoutube
                      title="YouTube"
                      className={styles['social-icon']}
                    />
                  </a>
                </li>
              )}

              {appConfig.socialLinks?.githubUrl && (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['social-icon-link']}
                    href={appConfig.socialLinks.githubUrl}
                  >
                    <FaGithub
                      title="GitHub"
                      className={styles['social-icon']}
                    />
                  </a>
                </li>
              )}

              {appConfig.socialLinks?.linkedinUrl && (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['social-icon-link']}
                    href={appConfig.socialLinks.linkedinUrl}
                  >
                    <FaLinkedinIn
                      title="LinkedIn"
                      className={styles['social-icon']}
                    />
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}

        <NavigationMenu
          className={styles.nav}
          menuLocation={MENUS.FOOTER_LOCATION}
          menuItems={MENUS.FOOTER_ITEMS}
        />
      </div>
      
<div>
<ul>
  <li>
    <a href="https://agrilife.tamu.edu/required-links/compact/">Compact with Texans</a>
    </li>
    <li>
      <a href="https://agrilife.tamu.edu/required-links/privacy/">Privacy and Security</a>
      </li>
      <li>
        <a href="http://itaccessibility.tamu.edu/" target="_blank" rel="noreferrer">Accessibility Policy</a>
        </li>
        <li>
        <a href="http://publishingext.dir.texas.gov/portal/internal/resources/DocumentLibrary/State%20Website%20Linking%20and%20Privacy%20Policy.pdf" target="_blank" rel="noreferrer">State Link Policy</a>
        </li>
        <li>
          <a href="http://www.tsl.state.tx.us/trail" target="_blank" rel="noreferrer">Statewide Search</a>
          </li>
          <li>
            <a href="http://veterans.tamu.edu/" target="_blank">Veterans Benefits</a>
            </li>
            <li>
              <a href="https://fch.tamu.edu/programs/military-programs/" target="_blank" rel="noreferrer">Military Families</a>
              </li>
              <li>
                <a href="https://secure.ethicspoint.com/domain/en/report_custom.asp?clientid=19681" target="_blank" rel="noreferrer">Risk, Fraud &amp; Misconduct Hotline</a>
                </li>
                <li>
                  <a href="https://gov.texas.gov/organization/hsgd" target="_blank" rel="noreferrer">Texas Homeland Security</a>
                  </li>
                  <li>
                    <a href="http://veterans.portal.texas.gov/">Texas Veterans Portal</a>
                    </li>
                    <li>
                      <a href="http://agrilifeas.tamu.edu/hr/diversity/equal-opportunity-educational-programs/" target="_blank" rel="noreferrer">Equal Opportunity</a>
                      </li>
                      <li>
                        <a href="https://agrilife.tamu.edu/required-links/orpi/">Open Records/Public Information</a>
                        </li>
                        </ul>   


        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Blueprint Media &#183; Powered By{' '}
          <a href="https://wpengine.com/atlas">Atlas</a>
        </div>
      </div>
    </footer> 
  );  
} 