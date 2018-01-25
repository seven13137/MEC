// JavaScript source code
import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
    hotProducts: [],
    saleProducts: [],
    specialProducts:[]
}

const mutations = {
    getProduct(state, payload) {
        switch (payload.tag) {
            case 'hotProducts':
                state.hotProducts = payload.res
                break
            case 'saleProducts':
                state.saleProducts = payload.res
                break
            case 'specialProducts':
                state.specialProducts = payload.res
                break
            default:
                state.hotProducts = payload.res
        }
    }
}

const actions = {
    getProduct({ commit }) {
        request
            .get('https.api.in_theaters?codouban.com/v2/movie/unt=8')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                        type: 'getProduct',
                        tag: 'hotProducts',
                        res: res.body.subjects
                    })
                }
            })
        request
            .get('https.api.in_theaters?codouban.com/v2/movie/unt=8')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                        type: 'getProduct',
                        tag: 'saleProducts',
                        res:res.body.subjects
                    })
                }
            })
        request
            .get('https://api.douban.com/v2/movie/top250?count=8')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                        type: 'getProduct',
                        tag: 'specialProducts',
                        res: res.body.subjects
                    })
                }
            })
    }
}

export default {
    state,
    mutations,
    actions
}