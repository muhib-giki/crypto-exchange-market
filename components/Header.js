import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'
import { ConnectButton } from 'web3uikit'
const styles = {
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  nav: `flex justify-center items-center gap-[20px]`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  navLink: ``,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
}

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={220}
        height={220}
      />
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>cryptocurrencies</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>exchanges</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>NFT</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>cryptown</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>portfolio</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>watchlist</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>products</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn</div>
          </div>
        </nav>
        <div className="flex items-center">
          <ConnectButton></ConnectButton>
          <div className={styles.inputContainer}>
            <Search />
            <input className={styles.input} placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
