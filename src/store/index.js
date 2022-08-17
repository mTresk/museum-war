import {createStore} from 'vuex'
import {Elastic, gsap} from "gsap";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {
        animate({commit}) {
            const tl = gsap.timeline();
            gsap.config({
                nullTargetWarn: false,
            });
            // ClassNamePlugin START (requires GSAP 3.2.2 or later)
            gsap.registerPlugin({
                name: 'className',
                init: true,
                register(gsap, Plugin) {
                    const CSSPlugin = gsap.plugins.css,
                        cssCore = CSSPlugin.core || console.warn('Requires GSAP 3.2.1 or later') || {},
                        _removeLinkedListItem = gsap.core._removeLinkedListItem,
                        _removeProperty = cssCore._removeProperty,
                        PropTween = gsap.core.PropTween,
                        _getAllStyles = function (target, uncache) {
                            let styles = {},
                                computed = getComputedStyle(target),
                                cache = target._gsap,
                                p;
                            for (p in computed) {
                                if (isNaN(p) && p !== 'cssText' && p !== 'length') {
                                    styles[p] = computed[p];
                                }
                            }
                            uncache && cache && (cache.uncache = true);
                            gsap.getProperty(target, 'x');
                            cache = target._gsap;
                            for (p in cache) {
                                styles[p] = cache[p];
                            }
                            return styles;
                        };
                    Plugin.prototype.init = function (target, endValue, tween) {
                        let startClassList = target.getAttribute('class'),
                            style = target.style,
                            cssText = style.cssText,
                            cache = target._gsap,
                            classPT = cache.classPT,
                            inlineToRemoveAtEnd = {},
                            end =
                                endValue.charAt(1) !== '='
                                    ? endValue
                                    : startClassList.replace(new RegExp('(?:\\s|^)' + endValue.substr(2) + '(?![\\w-])'), '') + (endValue.charAt(0) === '+' ? ' ' + endValue.substr(2) : ''),
                            plugin = this,
                            changingVars = {},
                            startVars = _getAllStyles(target),
                            transformRelated = /(transform|perspective)/i,
                            css = new CSSPlugin(),
                            _renderClassName = function (ratio) {
                                css.render(ratio, css);
                                if (!ratio || ratio === 1) {
                                    target.setAttribute('class', ratio ? end : startClassList);
                                    for (var p in inlineToRemoveAtEnd) {
                                        _removeProperty(target, p);
                                    }
                                }
                            },
                            endVars,
                            p;
                        if (classPT) {
                            classPT.r(1, classPT.d);
                            _removeLinkedListItem(classPT.d, classPT, '_pt');
                        }
                        target.setAttribute('class', end);
                        endVars = _getAllStyles(target, true);
                        target.setAttribute('class', startClassList);
                        for (p in endVars) {
                            if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
                                changingVars[p] = endVars[p];
                                if (!style[p] && style[p] !== '0') {
                                    inlineToRemoveAtEnd[p] = 1;
                                }
                            }
                        }
                        cache.classPT = plugin._pt = new PropTween(null, target, 'className', 0, 0, _renderClassName, plugin, 0, -11);
                        if (style.cssText !== cssText) {
                            style.cssText = cssText;
                        }
                        cache.uncache = true;
                        gsap.getProperty(target, 'x');
                        css.init(target, changingVars, tween);
                        plugin._props.push.apply(plugin._props, css._props);
                        return 1;
                    };
                },
            });

            function animContent() {
                return tl
                    .fromTo('.doves', {
                            className: '-=active',
                        },
                        {
                            className: '+=active',
                        })
                    .fromTo(
                        '.screen__bg',
                        {
                            scale: 0.8,
                            opacity: 0,
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 1.5,
                        }
                    )
                    .fromTo(
                        '.sound',
                        {
                            translateY: -100,
                            opacity: 0,
                        },
                        {
                            translateY: 0,
                            opacity: 1,
                        },
                        '-=1'
                    )
                    .fromTo(
                        '.screen__logo',
                        {
                            translateX: 100,
                            opacity: 0,
                        },
                        {
                            translateX: 0,
                            opacity: 1,
                        },
                        '-=1'
                    )
                    .fromTo(
                        '.screen__image',
                        {
                            translateY: 100,
                            opacity: 0,
                            rotation: 10,
                            stagger: 0.2,
                        },
                        {
                            translateY: 0,
                            opacity: 1,
                            rotation: 0,
                            duration: 0.7,
                            stagger: 0.2,
                        },
                        '-=0.8'
                    )
                    .fromTo(
                        '.screen__subtitle',
                        {
                            translateY: 50,
                            opacity: 0,
                            stagger: 0.2,
                        },
                        {
                            translateY: 0,
                            opacity: 1,
                            stagger: 0.2,
                        },
                        '-=0.3'
                    )
                    .fromTo(
                        '.screen__text',
                        {
                            translateY: 50,
                            opacity: 0,
                            stagger: 0.2,
                        },
                        {
                            translateY: 0,
                            opacity: 1,
                            stagger: 0.2,
                        },
                        '-=0.3'
                    )
                    .fromTo(
                        '.screen__navigation',
                        {
                            translateY: 150,
                            opacity: 0,
                        },
                        {
                            translateY: 0,
                            opacity: 1,
                        },
                        '-=0.4'
                    )
                    .fromTo(
                        '.screen__feathers',
                        {
                            scale: 0,
                            opacity: 0,
                            duration: 1,
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            ease: Elastic.easeOut.config(1.1, 0.5),
                            duration: 3,
                        },
                        '-=0.5'
                    );
            }

            animContent()


        }
    },
    modules: {}
})
