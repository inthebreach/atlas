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
        />
<div class="before-footer-cta"><div class="wrap"><section id="block-3" class="widget widget_block"><div class="widget-wrap"><div id="member-wrap" class="wp-block-columns">
<div id="a-bg"></div>
<div id="member-agrilife" class="wp-block-column">
<p class="member-text">A member of<br><a href="https://agrilife.tamu.edu/"><span class="member-brand">Texas A&amp;M AgriLife</span></a></p>
</div>
<div id="member-list" class="wp-block-column">
<p><a href="https://agrilifeextension.tamu.edu/">Texas A&amp;M AgriLife Extension Service</a> | <a href="https://agriliferesearch.tamu.edu/">Texas A&amp;M AgriLife Research</a> | <a href="https://tfsweb.tamu.edu/">Texas A&amp;M Forest Service</a> | <a href="https://tvmdl.tamu.edu/">Texas A&amp;M AgriLife Veterinary Medical Diagnostic Lab</a> | <a href="https://aglifesciences.tamu.edu/">College of Agriculture &amp; Life Sciences</a></p>
</div>
</div></div></section>
</div></div>
<footer class="site-footer" itemscope="" itemtype="https://schema.org/WPFooter"><div class="wrap"><p><a rel="noreferrer noopener" href="http://agrilife.org/required-links/compact/" target="_blank">Compact with Texans</a> | <a rel="noreferrer noopener" href="http://agrilife.org/required-links/privacy/" target="_blank">Privacy and Security</a> | <a rel="noreferrer noopener" href="http://itaccessibility.tamu.edu/" target="_blank">Accessibility Policy</a> | <a rel="noreferrer noopener" href="http://publishingext.dir.texas.gov/portal/internal/resources/DocumentLibrary/State%20Website%20Linking%20and%20Privacy%20Policy.pdf" target="_blank">State Link Policy</a> | <a rel="noreferrer noopener" href="http://www.tsl.state.tx.us/trail" target="_blank">Statewide Search</a> | <a rel="noreferrer noopener" href="http://veterans.tamu.edu/" target="_blank">Veterans Benefits</a> | <a rel="noreferrer noopener" href="http://fcs.tamu.edu/families/military_families/" target="_blank">Military Families</a> | <a rel="noreferrer noopener" href="https://secure.ethicspoint.com/domain/en/report_custom.asp?clientid=19681" target="_blank">Risk, Fraud &amp; Misconduct Hotline</a> | <a rel="noreferrer noopener" href="http://www.texashomelandsecurity.com/" target="_blank">Texas Homeland Security</a> | <a rel="noreferrer noopener" href="http://veterans.portal.texas.gov/" target="_blank">Texas Veteran's Portal</a> | <a rel="noreferrer noopener" href="http://aghr.tamu.edu/education-civil-rights.htm" target="_blank">Equal Opportunity</a> | <a rel="noreferrer noopener" href="http://agrilife.org/required-links/orpi/" target="_blank">Open Records/Public Information</a></p></div></footer>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Blueprint Media &#183; Powered By{' '}
          <a href="https://wpengine.com/atlas">Atlas</a>
        </div>
      </div>
    </footer>
  );
}
