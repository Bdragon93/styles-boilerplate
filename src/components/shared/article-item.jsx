import React from 'react';
import BaseComponent from 'components/base';
import { getDetail as dataGetter } from 'dataGetters/article';
import { Link } from 'react-router-dom';
import initComponent from 'libs/initComponent';
import { URL_ASSETS } from 'settings/variables';
import { dateTimeToDateRender } from 'utils/time';

//if (process.env.BROWSER) {
  //require('assets/styles/mobile/components/_article-item.scss');
//}

// Css modules
import styles from 'assets/styles/components/_article-item.scss';


// Styled components
import styled from 'styled-components';

// Should have the other file for hanlde styles
const Date = styled.div`
  padding-top: 10px;
  border-top: 1px solid #eee;
  color: #999;
  font-size: 12px;
`;

const MultiLink = styled(Link)`
  > img {
    width: 100%;
    border-radius: 2px 2px 0 0;
  }

  @media (min-width: 1024px) {
    flex-basis: 40%;
    > img {
      border-radius: 2px;
    }
  }
`;

class ArticleItem extends BaseComponent {
  static defaultProps = {
    dataGetter,
  };

  render() {
    console.log(styles)
    const { data } = this.props;
    const { id, snippet, multimedia, pub_date, source } = data.toObject();

    return (
      <div className={styles['article-item']}>
        {!!multimedia && (
          <MultiLink to={`/${id}`} className="article-link">
            <img src={`${URL_ASSETS}${multimedia}`} className={styles['article-img']}/>
          </MultiLink>
        )}
        <div className={styles['article-content']}>
          <div className="snippet">{snippet}</div>
          {!!source && <div className="source">{source}</div>}
          {!!pub_date && <Date>{dateTimeToDateRender(pub_date)}</Date>}
        </div>
      </div>
    );
  }
}

export default initComponent(ArticleItem);
