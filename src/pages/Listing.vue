 
<template>    
  <Layout> 
    <div class="section">	
      <div class="container" v-for="item in $page.allListing.edges" :key=item.node.id>       
          <label>Filter By Category: </label>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option value="ListingList">Show All</option>
              <option value="AcupunctureList">Acupuncture</option>
              <option value="ApparelList">Children's Apparel</option>
              <option value="BakeryList">Bakeries</option>
              <option value="BoutiqueList">Children's Boutiques</option>
              <option value="ChildcareList">Childcare</option>
              <option value="ClassesList">Classes</option>
              <option value="CraniosacralList">Craniosacral Therapy</option>
              <option value="DoulasList">Doulas</option>
              <option value="LactationList">Lactation Consultants</option>
              <option value="MassageList">Prenatal Massage</option>
              <option value="MidwifeList">Midwives</option>
              <option value="NaturopathList">Naturopathsl</option>
              <option value="PhotographyList">Photographers</option>
              <option value="PlacentaList">Placenta Encapsulation</option>
              <option value="SleepList">Sleep Training Consultants</option>
              <option value="SupportList">Support Groups</option>
              <option value="YogaList">Yoga</option>
            </select>        
            <br><br>
          <keep-alive>
            <component v-bind:is="selected"></component>
          </keep-alive>
        </div> 
      </div>
    </Layout>
</template>

<page-query>
  query Listing {
    allListing {
      edges {
        node {
          id
          records {
            name
            category
            link
            location
            }   
          }
        }
      }
    }
</page-query> 

<script>
  import ListingList from '~/components/ListingList'
  import MassageList from '~/components/MassageList'
  import AcupunctureList from '~/components/AcupunctureList'
  import ApparelList from '~/components/ApparelList'
  import BakeryList from '~/components/BakeryList'
  import BoutiqueList from '~/components/BoutiqueList'
  import ChildcareList from '~/components/ChildcareList'
  import ClassesList from '~/components/ClassesList'
  import CraniosacralList from '~/components/CraniosacralList'
  import DoulasList from '~/components/DoulasList'
  import LactationList from '~/components/LactationList'
  import MidwifeList from '~/components/MidwifeList'
  import NaturopathList from '~/components/NaturopathList'
  import PhotographyList from '~/components/PhotographyList'
  import PlacentaList from '~/components/PlacentaList'
  import SleepList from '~/components/SleepList'
  import SupportList from '~/components/SupportList'
  import YogaList from '~/components/YogaList'


  export default {
    components: {
      ListingList,
      MassageList,
      SleepList,
      AcupunctureList,
      ApparelList,
      BakeryList,
      BoutiqueList,
      ChildcareList,
      ClassesList,
      CraniosacralList,
      DoulasList,
      LactationList,
      MidwifeList,
      NaturopathList,
      PhotographyList,
      PlacentaList,
      SupportList,
      YogaList

    }, 
    data: function() {
      return {
        selected: ''
      }
    }
  }
</script>

