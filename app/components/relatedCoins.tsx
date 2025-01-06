import Link from 'next/link';
import { headers } from 'next/headers';

import { Card, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

import styles from '../styles/relatedCoins.module.css';

export default async function RelatedCoins({ relatedCoins }: any) {
  const headerList = headers();
  const domainName = (await headerList).get('host');
  let protocal: string = '';

  const coinData = {
    one: {
      imageURL: '',
      years: '',
      name: '',
    },
    two: {
      imageURL: '',
      years: '',
      name: '',
    },
    three: {
      imageURL: '',
      years: '',
      name: '',
    },
    four: {
      imageURL: '',
      years: '',
      name: '',
    },
  };

  try {
    const response = await fetch(
      `https://${domainName}/api/coins/${relatedCoins[0][0]}/${relatedCoins[0][1]}`,
    );
    const json: any = await response.json();

    protocal = 'https://';

    coinData.one.imageURL = json['data']['full'];
    coinData.one.years = json['data']['datesMinted'];
    coinData.one.name = json['data']['title'];
  } catch (e) {
    const response = await fetch(
      `http://${domainName}/api/coins/${relatedCoins[0][0]}/${relatedCoins[0][1]}`,
    );
    const json: any = JSON.parse(await response.json());

    coinData.one.imageURL = json['data']['full'];
    coinData.one.years = json['data']['datesMinted'];
    coinData.one.name = json['data']['title'];

    protocal = 'http://';
  }

  const second = await fetch(
    `${protocal}${domainName}/api/coins/${relatedCoins[1][0]}/${relatedCoins[1][1]}`,
  );
  const secondJson = JSON.parse(await second.json());

  coinData.two.imageURL = secondJson['data']['full'];
  coinData.two.years = secondJson['data']['datesMinted'];
  coinData.two.name = secondJson['data']['title'];

  const three = await fetch(
    `${protocal}${domainName}/api/coins/${relatedCoins[2][0]}/${relatedCoins[2][1]}`,
  );
  const threeJson = JSON.parse(await three.json());

  coinData.three.imageURL = threeJson['data']['full'];
  coinData.three.years = threeJson['data']['datesMinted'];
  coinData.three.name = threeJson['data']['title'];

  const four = await fetch(
    `${protocal}${domainName}/api/coins/${relatedCoins[3][0]}/${relatedCoins[3][1]}`,
  );
  const fourJson = JSON.parse(await four.json());

  coinData.four.imageURL = fourJson['data']['full'];
  coinData.four.years = fourJson['data']['datesMinted'];
  coinData.four.name = fourJson['data']['title'];

  return (
    <section className={styles.related}>
      <Card className={`${styles.item_1} ${styles.item}`}>
        <Link className="no_deceration" href={`/coin/${relatedCoins[0][0]}/${relatedCoins[0][1]}`}>
          <Image
            alt={`Image of the ${relatedCoins[0]}`}
            className={`${styles.image}`}
            src={coinData['one']['imageURL']}
          />

          <CardHeader>
            <p>{`${coinData['one']['name']} (${coinData['one']['years']})`}</p>
          </CardHeader>
        </Link>
      </Card>

      <Card className={`${styles.item_2} ${styles.item}`}>
        <Link className="no_deceration" href={`/coin/${relatedCoins[1][0]}/${relatedCoins[1][1]}`}>
          <Image
            alt={`Image of the ${relatedCoins[1]}`}
            className={`${styles.image}`}
            src={coinData['two']['imageURL']}
          />

          <CardHeader>
            <p>{`${coinData['two']['name']} (${coinData['two']['years']})`}</p>
          </CardHeader>
        </Link>
      </Card>

      <Card className={`${styles.item_3} ${styles.item}`}>
        <Link className="no_deceration" href={`/coin/${relatedCoins[2][0]}/${relatedCoins[2][1]}`}>
          <Image
            alt={`Image of the ${relatedCoins[2]}`}
            className={`${styles.image}`}
            src={coinData['three']['imageURL']}
          />

          <CardHeader>
            <p>{`${coinData['three']['name']} (${coinData['three']['years']})`}</p>
          </CardHeader>
        </Link>
      </Card>

      <Card className={`${styles.item_4} ${styles.item}`}>
        <Link className="no_deceration" href={`/coin/${relatedCoins[3][0]}/${relatedCoins[3][1]}`}>
          <Image
            alt={`Image of the ${relatedCoins[3]}`}
            className={`${styles.image}`}
            src={coinData['four']['imageURL']}
          />

          <CardHeader>
            <p>{`${coinData['four']['name']} (${coinData['four']['years']})`}</p>
          </CardHeader>
        </Link>
      </Card>
    </section>
  );
}
