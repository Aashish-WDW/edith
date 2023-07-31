import styles from '@/styles/Home.module.css'
import React from 'react'

function index() {
  return (
    <div>
      <div class={styles.agformatcontainer}>
        <div class={styles.ag_courses_box}>

          <div class={styles.ag_courses_item}>
            <a href="/product" class={styles.ag_courses_item_link}>
              <div class={styles.ag_courses_item_bg}></div>

              <div class={styles.ag_courses_item_title}>
                CETAPHIL CLEANSER
              </div>
            </a>
          </div>

          <div class={styles.ag_courses_item}>
            <a href="/product" class={styles.ag_courses_item_link}>
              <div class={styles.ag_courses_item_bg}></div>

              <div class={styles.ag_courses_item_title}>
                ANOOS HENNA
              </div>
            </a>
          </div>

          <div class={styles.ag_courses_item}>
            <a href="/product" class={styles.ag_courses_item_link}>
              <div class={styles.ag_courses_item_bg}></div>

              <div class={styles.ag_courses_item_title}>
                UrbanBotanics
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default index