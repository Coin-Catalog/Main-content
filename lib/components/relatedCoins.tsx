import Link from 'next/link'
import styles from '../../styles/relatedCoins.module.css'

interface RelatedCoinsProps {
  relatedCoins: string[]
}

export default function RelatedCoins({ relatedCoins }: RelatedCoinsProps) {
  interface CoinDataItem {
    name: string
    years: string
    imageURL: string
  }

  interface CoinData {
    flyingEagle: CoinDataItem
    indianHead: CoinDataItem
    wheatPennies: CoinDataItem
    memorialPennies: CoinDataItem
    pennies2009: CoinDataItem
    shieldPennies: CoinDataItem
  }

  const coinData: CoinData = 
  {
    "flyingEagle": {
      "name": "Flying Eagle",
      "years": "1856-1858",
      "imageURL": "https://github.com/Coin-Catalog/Main-content/blob/main/public/images/pennies/SC/PNGs/flyingEagle.png?raw=true"
    },
    "indianHead": {
      "name": "Indian Head",
      "years": "1859-1909",
      "imageURL": "https://github.com/Coin-Catalog/Main-content/blob/main/public/images/pennies/SC/PNGs/indianHead.png?raw=true"
    },
    "wheatPennies": {
      "name": "Wheat Pennies",
      "years": "1909-1958",
      "imageURL": "https://github.com/Coin-Catalog/Main-content/blob/main/public/images/pennies/SC/PNGs/wheatPennies.png?raw=true"
    },
    "memorialPennies": {
      "name": "Memorial Pennies",
      "years": "1959-2008",
      "imageURL": "https://github.com/Coin-Catalog/Main-content/blob/main/public/images/pennies/SC/PNGs/memorialPennies.png?raw=true"
    },
    "pennies2009": {
      "name": "2009 Pennies",
      "years": "2009",
      "imageURL": "https://github.com/Coin-Catalog/Main-content/blob/main/public/images/pennies/SC/PNGs/pennies2009.png?raw=true"
    },
    "shieldPennies": {
      "name": "Shield Pennies",
      "years": "2010-present",
      "imageURL": "https://github.com/Coin-Catalog/Main-content/blob/main/public/images/pennies/SC/PNGs/shieldPennies.png?raw=true"
    }
  }

  return (
    <section className={styles.related}>
      <section className={`${styles.item_1} ${styles.item}`}>
        <Link href={`/entries/${relatedCoins[0]}`} target="_blank" className="no_deceration">
          <picture className={styles.penny_img}>
            <source src={coinData[relatedCoins[0]]["imageURL"]} className={styles.penny_img} />
      
            <img src={coinData[relatedCoins[0]]["imageURL"]} alt={`Image of the ${relatedCoins[0]}`} className={styles.penny_img} />
          </picture>
    
          <p>{`${relatedCoins[0]} (${coinData[relatedCoins[0]]["years"]})`}</p>
        </Link>
      </section>

      <section className={`${styles.item_2} ${styles.item}`}>
        <Link href={`/entries/${relatedCoins[1]}`} target="_blank" className="no_deceration">
          <picture className={styles.penny_img}>
            <source src={coinData[relatedCoins[1]]["imageURL"]} className={styles.penny_img} />
      
            <img src={coinData[relatedCoins[1]]["imageURL"]} alt={`Image of the ${relatedCoins[1]}`} className={styles.penny_img} />
          </picture>
    
          <p>{`${relatedCoins[1]} (${coinData[relatedCoins[1]]["years"]})`}</p>
        </Link>
      </section>

      <section className={`${styles.item_3} ${styles.item}`}>
        <Link href={`/entries/${relatedCoins[2]}`} target="_blank" className="no_deceration">
          <picture className={styles.penny_img}>
            <source src={coinData[relatedCoins[2]]["imageURL"]} className={styles.penny_img} />
      
            <img src={coinData[relatedCoins[2]]["imageURL"]} alt={`Image of the ${relatedCoins[2]}`} className={styles.penny_img} />
          </picture>
    
          <p>{`${relatedCoins[2]} (${coinData[relatedCoins[2]]["years"]})`}</p>
        </Link>
      </section>

      <section className={`${styles.item_4} ${styles.item}`}>
        <Link href={`/entries/${relatedCoins[3]}`} target="_blank" className="no_deceration">
          <picture className={styles.penny_img}>
            <source src={coinData[relatedCoins[3]]["imageURL"]} className={styles.penny_img} />
      
            <img src={coinData[relatedCoins[3]]["imageURL"]} alt={`Image of the ${relatedCoins[3]}`} className={styles.penny_img} />
          </picture>
    
          <p>{`${relatedCoins[3]} (${coinData[relatedCoins[3]]["years"]})`}</p>
        </Link>
      </section>
    </section>
  )
}