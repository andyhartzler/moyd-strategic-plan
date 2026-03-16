import { ScrollAnimations, SectionNav } from '@/components/ScrollAnimations';
import { DownloadButton } from '@/components/DownloadButton';

export default function Home() {
  return (
    <>
      <ScrollAnimations />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-5 md:px-6">
        <div className="reveal-scale">
          <p className="text-[#8BC4DB] text-xs md:text-base font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase mb-3 md:mb-4">
            Missouri Young Democrats
          </p>
          <h1 className="text-[2.75rem] leading-[0.9] md:text-7xl lg:text-8xl font-extrabold uppercase tracking-[-0.06em] md:leading-[0.95] text-white mb-4 md:mb-6">
            Two-Year<br />Strategic Plan
          </h1>
          <p className="text-xl md:text-3xl font-bold text-white/60 tracking-[-0.04em] uppercase">
            2026 &ndash; 2028
          </p>
        </div>
        <div className="reveal mt-10 md:mt-12 flex flex-col items-center gap-4">
          <DownloadButton />
          <div className="animate-bounce mt-6 md:mt-8">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section Nav (sticky) */}
      <SectionNav />

      {/* ==================== EXECUTIVE SUMMARY ==================== */}
      <section id="executive-summary" data-section="executive-summary" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Executive Summary
          </h2>
        </div>

        <div className="glass-tile reveal mb-6 md:mb-8">
          <h3 className="text-lg md:text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-4 md:mb-6">
            Our Unique Position
          </h3>
          <p className="text-white/90 leading-relaxed font-medium mb-4">
            Missouri Young Democrats occupies a distinctive position in the state&apos;s political ecosystem. As the official youth arm of the Missouri Democratic Party with formal recognition from Young Democrats of America, MOYD serves as the bridge between grassroots youth organizing and the institutional Democratic establishment. Our President holds a voting seat on the MDP Chairman&apos;s Executive Committee, ensuring young voices are centered in party decision-making.
          </p>
          <div className="pull-quote my-8">
            We are not merely a club or social organization. We are a registered Political Action Committee building real political power.
          </div>
          <p className="text-white/90 leading-relaxed font-medium mb-4">
            Our organizational structure encompasses three interconnected but operationally independent entities:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6 stagger-children">
            <div className="stat-card reveal">
              <p className="text-white font-bold text-sm uppercase tracking-wide mb-2">MOYD</p>
              <p className="text-white/80 text-sm">Umbrella organization for all members aged 14-36, managing statewide operations, policy advocacy, endorsements, and party coordination.</p>
            </div>
            <div className="stat-card reveal">
              <p className="text-white font-bold text-sm uppercase tracking-wide mb-2">MOCD</p>
              <p className="text-white/80 text-sm">The collegiate affiliate organizing chapters at universities and colleges, developing campus leaders, and mobilizing student voters.</p>
            </div>
            <div className="stat-card reveal">
              <p className="text-white font-bold text-sm uppercase tracking-wide mb-2">MOHSD</p>
              <p className="text-white/80 text-sm">The secondary school affiliate engaging students aged 14-18 in civic education, preregistration drives, and early leadership development.</p>
            </div>
          </div>
        </div>

        {/* Four Pillars Preview */}
        <div className="reveal mb-6 md:mb-8">
          <h3 className="text-lg md:text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-4 md:mb-6">
            Strategic Priorities for 2026-2028
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 stagger-children">
          <div className="pillar-card reveal">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Pillar One</p>
            <h4 className="text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3">Mobilize</h4>
            <p className="text-white/85 text-sm leading-relaxed font-medium">Engage young Missourians at unprecedented scale, growing from 400 to 2,500 members by 2028, registering 10,000 new young voters, and achieving 70% voter turnout among our membership in statewide elections.</p>
          </div>
          <div className="pillar-card reveal">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Pillar Two</p>
            <h4 className="text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3">Develop</h4>
            <p className="text-white/85 text-sm leading-relaxed font-medium">Cultivate the next generation of Democratic leaders through comprehensive training programs, mentorship networks, and pathways from membership to candidacy. Our goal: 50 young Democrats running for office by 2028.</p>
          </div>
          <div className="pillar-card reveal">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Pillar Three</p>
            <h4 className="text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3">Organize</h4>
            <p className="text-white/85 text-sm leading-relaxed font-medium">Expand our geographic footprint to establish active chapters in all eight congressional districts. We will charter 25 new chapters by 2028 and ensure every Missouri county has access to MOYD programming.</p>
          </div>
          <div className="pillar-card reveal">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Pillar Four</p>
            <h4 className="text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3">Elect</h4>
            <p className="text-white/85 text-sm leading-relaxed font-medium">Break the Republican supermajority in the Missouri General Assembly by strategically deploying our resources to flip targeted seats. Our 2026 goal: flipping 3 House seats and 2 Senate seats.</p>
          </div>
        </div>

        {/* What Success Looks Like */}
        <div className="glass-tile reveal mt-8 md:mt-10">
          <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-[-0.04em] text-white mb-4 md:mb-6">What Success Looks Like</h3>
          <p className="text-white/90 leading-relaxed font-medium mb-4 md:mb-6">By 2028, Missouri Young Democrats will have transformed from a recently-revived organization to the state&apos;s preeminent youth political force.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 stagger-children">
            <div className="stat-card reveal"><div className="stat-number">2,500</div><div className="stat-label">Members in 35+ Chapters</div></div>
            <div className="stat-card reveal"><div className="stat-number">10K</div><div className="stat-label">New Registered Young Voters</div></div>
            <div className="stat-card reveal"><div className="stat-number">50+</div><div className="stat-label">Young Democrats Running for Office</div></div>
            <div className="stat-card reveal"><div className="stat-number">$100K</div><div className="stat-label">Annual Operating Budget</div></div>
            <div className="stat-card reveal"><div className="stat-number">0</div><div className="stat-label">Republican Supermajority (Broken)</div></div>
            <div className="stat-card reveal"><div className="stat-number">#1</div><div className="stat-label">Model for State YDA Affiliates</div></div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION, VISION & FOCUS ==================== */}
      <section id="mission-vision" data-section="mission-vision" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Mission, Vision &amp; Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <div className="glass-tile reveal-left">
            <h3 className="text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-4">Mission</h3>
            <p className="text-white/90 leading-relaxed font-medium">
              Missouri Young Democrats works to engage young Missourians in the political process, cultivate Democratic leadership, and help elect Democratic candidates who reflect the values and priorities of young people. MOYD empowers youth across Missouri through education, organizing, advocacy, and leadership development, building the infrastructure for sustained progressive change.
            </p>
          </div>
          <div className="glass-tile reveal-right">
            <h3 className="text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-4">Vision</h3>
            <p className="text-white/90 leading-relaxed font-medium">
              Missouri Young Democrats envisions a Missouri where the voices of young people are not only heard but centered in the fight for equity, opportunity, dignity, and democracy for all. We see a state where every young person has accessible pathways to meaningful political participation, where Democratic values of justice and inclusion prevail, and where the next generation of progressive leaders emerges from every corner of our state.
            </p>
          </div>
        </div>

        <div className="glass-tile reveal mt-5 md:mt-8">
          <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-[-0.04em] text-white mb-4 md:mb-6">Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-2">Mobilization</h4>
              <p className="text-white/80 text-sm leading-relaxed">We engage young Missourians through digital-first organizing, meeting them where they are on social media, on college campuses, and in their communities. We convert awareness into action through accessible on-ramps to participation.</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-2">Substance</h4>
              <p className="text-white/80 text-sm leading-relaxed">We focus exclusively on building youth political power within the Democratic coalition. We do not duplicate issue-specific advocacy work; instead, we mobilize young people in support of progressive causes.</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-2">Operations</h4>
              <p className="text-white/80 text-sm leading-relaxed">We complement our partners by providing what they cannot: scalable youth mobilization, a leadership development pipeline, and the authentic voice of a youth-led movement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LETTER FROM THE PRESIDENT ==================== */}
      <section id="letter" data-section="letter" className="px-4 md:px-8 max-w-4xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Letter from the President
          </h2>
        </div>

        <div className="glass-tile reveal">
          <p className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] mb-8">Dear Fellow Young Democrats,</p>

          <div className="space-y-5 text-white/90 leading-relaxed font-medium">
            <p>In January 2025, I had a conversation that altered the direction of my life and, I hope, will help change the future of Missouri. That conversation was with the Executive Director of the Missouri Democratic Party, asking a simple question: &ldquo;What happened to Missouri Young Democrats?&rdquo;</p>

            <p>The answer was sobering. Missouri Young Democrats had effectively ceased to exist in 2018. For seven years, Missouri lacked an organized statewide young Democrats organization. Seven years where young people had no dedicated political home within the Democratic coalition. Seven years where our voices were absent from party decision-making. Seven years lost.</p>

            <p>I couldn&apos;t accept that. Neither could the extraordinary group of young Missourians who answered the call when we began rebuilding. What started with a few organizing calls in my apartment has grown into something I could never have imagined: nearly 400 members across 61 counties, representing every corner of this state.</p>

            <div className="pull-quote my-8">
              Our first six months have exceeded every expectation. We adopted a comprehensive constitution with democratic governance structures. We established seven standing committees and filled every position with committed volunteers.
            </div>

            <p>We chartered eight chapters, from established college Democrats clubs to brand-new county organizations. We built digital infrastructure that rivals organizations with ten times our budget. We hosted ten in-person events, including a rally at the State Capitol against gerrymandered maps. We generated over a million social media impressions.</p>

            <p>And perhaps most importantly, we earned our seat at the table. MOYD is now officially chartered with Young Democrats of America. I hold a voting position on the Missouri Democratic Party Chairman&apos;s Executive Committee. When decisions are made about the future of Missouri Democrats, young people now have a voice.</p>

            <p>But I will be honest with you: the hardest work is still ahead.</p>

            <p>This strategic plan is our blueprint for the next three years. It is ambitious. It is comprehensive. And it is grounded in reality, built on what we learned in our first six months about what works in Missouri.</p>

            <div className="pull-quote my-8">
              The Republican supermajority wants us to stay silent. They want young people to stay home. They are counting on us to give up, to accept that Missouri is a lost cause, to surrender before the fight is over. They have underestimated us.
            </div>

            <p>Missouri Young Democrats is back. And we are just getting started.</p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-white/80 text-sm uppercase tracking-wide">With Resolve and Hope,</p>
            <p className="text-white font-bold text-lg mt-1">Andrew Hartzler</p>
            <p className="text-white/90 text-sm font-bold uppercase tracking-wide">President, Missouri Young Democrats</p>
          </div>
        </div>
      </section>

      {/* ==================== THE CURRENT MOMENT ==================== */}
      <section id="current-moment" data-section="current-moment" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-3 md:mb-4">
            The Current Moment
          </h2>
          <p className="text-white/70 text-sm md:text-lg font-bold uppercase tracking-wide mb-8 md:mb-12">Missouri&apos;s Political Landscape Demands Youth Engagement</p>
        </div>

        <div className="glass-tile reveal mb-8">
          <p className="text-white/90 leading-relaxed font-medium mb-4">
            Missouri stands at a crossroads. Once a quintessential swing state (the &ldquo;bellwether&rdquo; that voted for the presidential winner in every election from 1904 to 2004), Missouri has shifted dramatically rightward over the past two decades. Republicans now hold supermajorities in both chambers of the General Assembly (108-52 in the House; 24-10 in the Senate).
          </p>
          <p className="text-white/90 leading-relaxed font-medium mb-4">
            The 2025 legislative session demonstrated the stakes. Lawmakers passed restrictions on gender-affirming care for minors, new barriers to initiative petitions, and continued underfunding of public education.
          </p>
          <div className="pull-quote my-8">
            Yet beneath this challenging landscape lies unprecedented opportunity. Missouri is home to approximately 1.2 million residents aged 18-36, nearly 20% of the state&apos;s population.
          </div>
          <p className="text-white/90 leading-relaxed font-medium">
            The problem is not that young Missourians don&apos;t care. It&apos;s that no one has given them reason to engage.
          </p>
        </div>

        <div className="glass-tile reveal">
          <h3 className="text-xl font-extrabold uppercase tracking-[-0.04em] text-white mb-6">The Opportunity Before Us</h3>
          <p className="text-white/90 leading-relaxed font-medium mb-4">
            Our first six months proved the demand for youth political organization in Missouri. Without paid staff, without significant budget, without any existing infrastructure to build upon, we recruited nearly 400 members across 61 counties.
          </p>
          <p className="text-white/90 leading-relaxed font-medium mb-4">
            The 2026 midterm elections offer our first major test. Breaking the Republican supermajority requires flipping just three House seats and two Senate seats, achievable targets with effective youth mobilization in competitive districts.
          </p>
          <p className="text-white/90 leading-relaxed font-medium">
            Missouri Young Democrats will be the force that tips these scales. We are positioning ourselves as the youth mobilization arm of the progressive coalition in Missouri.
          </p>
        </div>
      </section>

      {/* ==================== STRATEGIC ADVANTAGE ==================== */}
      <section id="strategic-advantage" data-section="strategic-advantage" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Strategic Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 stagger-children">
          {[
            { num: '1', title: 'Young People Are Our Superpower', text: 'Missouri Young Democrats is the only organization in the state built specifically to mobilize young people at scale for Democratic causes. Youth mobilization is our entire purpose.' },
            { num: '2', title: "We Rebuilt From Scratch", text: 'Unlike organizations carrying legacy systems and outdated approaches, MOYD was built in 2025 with modern tools and contemporary organizing methods. We can move faster and adapt more readily than established organizations.' },
            { num: '3', title: 'Our Statewide Reach Is Unmatched', text: 'Within six months of relaunch, MOYD established presence in 61 of Missouri\'s 114 counties and all eight congressional districts. No other youth-focused organization in Missouri can claim similar geographic breadth.' },
            { num: '4', title: "We've Earned Institutional Standing", text: 'We are a chartered affiliate of Young Democrats of America with official recognition from the Missouri Democratic Party. Our President holds a voting seat on the MDP Chairman\'s Executive Committee.' },
            { num: '5', title: 'Our Structure Enables Specialized Engagement', text: 'The MOYD umbrella encompasses Missouri College Democrats and Missouri High School Democrats as operationally independent affiliates. A high school sophomore and a law school student have different needs, and our structure serves both.' },
            { num: '6', title: 'We Are Building for the Long Term', text: 'This MOYD has invested heavily in governance infrastructure: a comprehensive constitution, defined officer roles, term limits, transition procedures, and accountability mechanisms.' },
          ].map((item) => (
            <div key={item.num} className="glass-tile reveal">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl font-extrabold text-[#5B9FBD]/30">{item.num}</span>
                <div>
                  <h3 className="text-lg font-extrabold uppercase tracking-[-0.04em] text-white mb-2">{item.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== GOALS & STRATEGIES ==================== */}
      <section id="goals" data-section="goals" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Goals &amp; Strategies
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Mobilize */}
          <div className="pillar-card reveal">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Pillar One</p>
            <h3 className="text-xl md:text-3xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3 md:mb-4">Mobilize</h3>
            <p className="text-white/85 text-sm md:text-base leading-relaxed font-medium mb-4 md:mb-6">Engage young Missourians at unprecedented scale, converting awareness into action through accessible pathways to participation.</p>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">2,500</div><div className="stat-label text-[0.6rem] md:text-xs">Members by 2028</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">10K</div><div className="stat-label text-[0.6rem] md:text-xs">New Voters Registered</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">70%</div><div className="stat-label text-[0.6rem] md:text-xs">Member Voter Turnout</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">50K</div><div className="stat-label text-[0.6rem] md:text-xs">Social Followers</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">10K</div><div className="stat-label text-[0.6rem] md:text-xs">Email Subscribers</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">25%+</div><div className="stat-label text-[0.6rem] md:text-xs">Email Open Rate</div></div>
            </div>
          </div>

          {/* Develop */}
          <div className="pillar-card reveal">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Pillar Two</p>
            <h3 className="text-xl md:text-3xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3 md:mb-4">Develop</h3>
            <p className="text-white/85 text-sm md:text-base leading-relaxed font-medium mb-4 md:mb-6">Cultivate the next generation of Democratic leaders through training, mentorship, and pathways from membership to candidacy.</p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-3">
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">500</div><div className="stat-label text-[0.6rem] md:text-xs">Leadership Trained</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">50</div><div className="stat-label text-[0.6rem] md:text-xs">Running for Office</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">90%</div><div className="stat-label text-[0.6rem] md:text-xs">Leader Retention</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">25</div><div className="stat-label text-[0.6rem] md:text-xs">In Elected Positions</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">200+</div><div className="stat-label text-[0.6rem] md:text-xs">Convention Attendees</div></div>
            </div>
          </div>

          {/* Organize */}
          <div className="pillar-card reveal">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Pillar Three</p>
            <h3 className="text-xl md:text-3xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3 md:mb-4">Organize</h3>
            <p className="text-white/85 text-sm md:text-base leading-relaxed font-medium mb-4 md:mb-6">Expand geographic footprint through chapter development, ensuring every Missouri community has access to youth Democratic organizing.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">35</div><div className="stat-label text-[0.6rem] md:text-xs">Active Chapters</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">8/8</div><div className="stat-label text-[0.6rem] md:text-xs">Congressional Districts</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">50+</div><div className="stat-label text-[0.6rem] md:text-xs">HS Chapters</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">80%</div><div className="stat-label text-[0.6rem] md:text-xs">Chapter Retention</div></div>
            </div>
          </div>

          {/* Elect */}
          <div className="pillar-card reveal">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Pillar Four</p>
            <h3 className="text-xl md:text-3xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3 md:mb-4">Elect</h3>
            <p className="text-white/85 text-sm md:text-base leading-relaxed font-medium mb-4 md:mb-6">Break the Republican supermajority by strategically deploying youth mobilization in targeted races and supporting Democratic candidates.</p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-3">
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">3+2</div><div className="stat-label text-[0.6rem] md:text-xs">House + Senate Flipped</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">20</div><div className="stat-label text-[0.6rem] md:text-xs">Endorsed Elected (2028)</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">+15%</div><div className="stat-label text-[0.6rem] md:text-xs">Youth Turnout Increase</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">5K</div><div className="stat-label text-[0.6rem] md:text-xs">Door Knocks Per Cycle</div></div>
              <div className="stat-card"><div className="stat-number text-lg md:text-xl">100K</div><div className="stat-label text-[0.6rem] md:text-xs">Peer-to-Peer Contacts</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== THEORY OF CHANGE ==================== */}
      <section id="theory-of-change" data-section="theory-of-change" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-3 md:mb-4">
            Theory of Change
          </h2>
          <p className="text-white/70 text-sm md:text-lg font-bold uppercase tracking-wide mb-8 md:mb-12">How We Create Political Change in Missouri</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="glass-tile reveal-left">
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-3">Problem</h3>
            <p className="text-white/90 leading-relaxed font-medium">
              Young Missourians are politically aware and concerned about issues affecting their lives but feel disconnected from political processes and lack accessible pathways to meaningful engagement. For seven years, no statewide organization existed to channel youth political energy.
            </p>
          </div>
          <div className="glass-tile reveal-right">
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-3">Strategy</h3>
            <p className="text-white/90 leading-relaxed font-medium">
              Missouri Young Democrats rebuilds the infrastructure for youth political engagement through four integrated approaches: mobilizing through digital-first organizing; developing leaders through training; organizing communities through local chapters; and electing Democrats through targeted voter engagement.
            </p>
          </div>
          <div className="glass-tile reveal-left">
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-3">Outcome</h3>
            <p className="text-white/90 leading-relaxed font-medium">
              Politicians face visible, coordinated youth engagement that rewards responsiveness. Democratic candidates receive youth mobilization capacity. The Democratic Party integrates youth perspectives into decision-making. Young people see peers leading, running for office, and winning.
            </p>
          </div>
          <div className="glass-tile reveal-right">
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-3">Impact</h3>
            <p className="text-white/90 leading-relaxed font-medium">
              Increased youth participation shifts the electorate&apos;s composition, breaks Republican supermajorities, and advances policies aligned with young people&apos;s values. We build a generation of leaders who will shape Missouri politics for decades.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== STRATEGY IMPLEMENTATION ==================== */}
      <section id="implementation" data-section="implementation" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Strategy Implementation
          </h2>
        </div>

        {/* Mobilize Implementation */}
        <div className="glass-tile reveal mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-2">Pillar One: Mobilize</h3>
          <p className="text-white/80 text-sm mb-6">Engage young Missourians at unprecedented scale through digital-first organizing</p>

          <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-4">Strategy: Build Digital Organizing Infrastructure</h4>
          <div className="space-y-3 mb-8">
            {[
              { title: 'MOYD.APP Member Portal', desc: 'Our proprietary platform serves as digital headquarters for member engagement. Features include digital membership cards, meeting minutes, volunteer opportunity listings, and event registration.' },
              { title: 'Social Media Across Platforms', desc: 'Active presence on Instagram, TikTok, Twitter/X, and Facebook, tailoring content to each platform. Goal: 50,000 total followers by 2028.' },
              { title: 'Email & SMS Communication', desc: 'Direct communication channels through email (10,000 subscribers target) and SMS for rapid response mobilization. 25%+ open rates standard.' },
              { title: 'Slack Workspace', desc: 'Real-time organizing headquarters with channels for each committee, chapter, and key initiative.' },
              { title: 'Advocacy Tool', desc: 'action.moyoungdemocrats.org enables members to take action on priority issues with AI-assisted message generation.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B9FBD] mt-2 shrink-0" />
                <div>
                  <span className="text-white font-bold text-sm">{item.title}: </span>
                  <span className="text-white/85 text-sm">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-4">Strategy: Data-Driven Outreach</h4>
          <div className="space-y-3">
            {[
              'Campus organizing blitzes at every public four-year institution by 2027',
              'High school outreach with civic education presentations and voter preregistration drives',
              'Relational organizing campaigns: each active member recruits three new members annually',
              'Voter registration drives at campuses, community events, concerts, and high-traffic locations',
              'Geographic targeting using data analysis to identify high-potential, low-membership areas',
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B9FBD] mt-2 shrink-0" />
                <p className="text-white/85 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Develop Implementation */}
        <div className="glass-tile reveal mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-2">Pillar Two: Develop</h3>
          <p className="text-white/80 text-sm mb-4 md:mb-6">Cultivate the next generation of Democratic leaders</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-3">Leadership Development</h4>
              <div className="space-y-3">
                {[
                  'State Convention: Flagship annual event with workshops, keynotes, committee meetings, and networking (250+ attendees by 2027)',
                  'Leadership Academies: Multi-session training covering Organizing 101, Campaign Skills, Advocacy Training, and Communications',
                  'Mentorship Network: Pairing emerging leaders with experienced Democratic operatives and elected officials',
                  'Fellowship Programs: Paid positions for Communications, Organizing, and Policy',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5B9FBD] mt-2 shrink-0" />
                    <p className="text-white/85 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-3">Candidate Pipeline</h4>
              <div className="space-y-3">
                {[
                  'Systematic candidate identification through committee work and chapter leadership',
                  'One-on-one encouragement conversations with promising members',
                  'Connections with current officeholders to help envision pathways to candidacy',
                  'Target: 50 young Democrats running for office by 2028',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5B9FBD] mt-2 shrink-0" />
                    <p className="text-white/85 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Organize Implementation */}
        <div className="glass-tile reveal mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-2">Pillar Three: Organize</h3>
          <p className="text-white/80 text-sm mb-6">Expand geographic footprint through chapter development</p>

          <div className="space-y-3 mb-6">
            {[
              'College Democrat Expansion: Chartered chapters at all 8 public 4-year universities, outreach to private universities and HBCUs. Target: 15 college chapters by 2028.',
              'High School Democrat Growth: Chapter chartering at interested schools (minimum 3 members), community chapters for areas without school options. Target: 50+ by 2028.',
              'Chapter Resources: Bylaws templates, mini-grants ($100-500), promotional materials, VAN/Votebuilder access, and regular support.',
              'Year-Round Programming: State Convention, regional socials, legislative session engagement, community service events.',
              'Succession Planning: Every chapter officer identifies and develops potential successors with documented handoffs.',
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B9FBD] mt-2 shrink-0" />
                <p className="text-white/85 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Elect Implementation */}
        <div className="glass-tile reveal">
          <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-[-0.04em] text-white mb-2">Pillar Four: Elect</h3>
          <p className="text-white/80 text-sm mb-4 md:mb-6">Break the Republican supermajority through strategic youth mobilization</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-3">Targeted Electoral Programs</h4>
              <div className="space-y-3">
                {[
                  'Competitive district identification: margins under 10%, significant youth population, viable candidates',
                  'Targeted voter registration in competitive districts',
                  'Relational organizing: peer-to-peer outreach within personal networks',
                  'Volunteer mobilization: canvassing weekends, phone banks, text banks, Election Day GOTV',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5B9FBD] mt-2 shrink-0" />
                    <p className="text-white/85 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-3">Candidate Support</h4>
              <div className="space-y-3">
                {[
                  'Endorsement program: questionnaire, committee vetting, 2/3 Executive Committee vote required',
                  'Campaign partnership: voter contact lists, volunteer recruitment, social media amplification',
                  'Independent expenditure campaigns: digital ads targeting young voters in competitive districts',
                  'Coordinated campaign participation within broader state party GOTV infrastructure',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5B9FBD] mt-2 shrink-0" />
                    <p className="text-white/85 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ORGANIZATIONAL STRUCTURE ==================== */}
      <section id="organizational" data-section="organizational" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Organizational Structure
          </h2>
        </div>

        <div className="glass-tile reveal mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-[-0.04em] text-white mb-4 md:mb-6">Governance That Enables Growth</h3>
          <p className="text-white/90 leading-relaxed font-medium mb-6">
            Missouri Young Democrats operates under a comprehensive Constitution adopted July 27, 2025 and last amended November 10, 2025. This governing document establishes democratic governance, clear accountability, and structures designed to support organizational growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-3">Statewide Officers</h4>
              <div className="space-y-2">
                <p className="text-white/85 text-sm"><span className="text-white font-bold">President:</span> Chief executive, spokesperson, MDP Executive Committee voting seat</p>
                <p className="text-white/85 text-sm"><span className="text-white font-bold">Vice President:</span> Assists President, liaison to standing committees</p>
                <p className="text-white/85 text-sm"><span className="text-white font-bold">Secretary:</span> Maintains records, membership roster, meeting minutes</p>
                <p className="text-white/85 text-sm"><span className="text-white font-bold">Treasurer:</span> Manages finances, MEC reports, annual budget</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-3">Executive Committee</h4>
              <p className="text-white/85 text-sm leading-relaxed font-medium">
                4 Statewide Officers + 7 Committee Chairs + 8 CD Representatives = <span className="text-white font-bold">19 voting members</span>. Meets biweekly on Tuesdays at 8 PM CT. Quorum: 50% + 1.
              </p>
              <p className="text-white/85 text-sm leading-relaxed font-medium mt-2">
                Powers include: implementing mission and strategy, managing operations, approving annual budget, voting on endorsements, filling vacancies, and ensuring Code of Conduct compliance.
              </p>
            </div>
          </div>

          <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-3">7 Standing Committee Chairs</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            {['College Democrats', 'High School Democrats', 'Fundraising', 'Communications', 'Membership & Outreach', 'Political Affairs', 'Policy & Advocacy'].map((name) => (
              <div key={name} className="text-center p-2 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white/80 text-xs font-bold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FUNDRAISING & SUSTAINABILITY ==================== */}
      <section id="fundraising" data-section="fundraising" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Fundraising &amp; Sustainability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="glass-tile reveal-left">
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-3">Current Position</h3>
            <div className="stat-number text-4xl mb-2">$3,000+</div>
            <p className="text-white/80 text-sm">Raised as of December 2025</p>
            <p className="text-white/80 text-sm mt-2">$1,200 raised at November event (9 attendees). No paid staff; all operations conducted by volunteers.</p>
          </div>
          <div className="glass-tile reveal-right">
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-3">Goals</h3>
            <div className="space-y-3">
              <div>
                <div className="stat-number text-3xl">$50K</div>
                <p className="text-white/80 text-sm">by November 2026</p>
              </div>
              <div>
                <div className="stat-number text-3xl">$100K</div>
                <p className="text-white/80 text-sm">annually by 2028</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-tile reveal">
          <h3 className="text-xl font-extrabold uppercase tracking-[-0.04em] text-white mb-6">Budget Allocation (Target $50,000)</h3>
          <div className="overflow-x-auto">
            <table className="metrics-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Field Organizing', '$12,500', '25%'],
                  ['State Convention & Trainings', '$7,500', '15%'],
                  ['Digital Communications & Content', '$6,000', '12%'],
                  ['Chapter Mini-Grants', '$5,000', '10%'],
                  ['Endorsement/Advocacy Work', '$5,000', '10%'],
                  ['Technology & Infrastructure', '$5,000', '10%'],
                  ['Reserve & Contingency', '$4,000', '8%'],
                  ['Administrative/Compliance', '$2,500', '5%'],
                  ['Audit & Financial Transparency', '$2,500', '5%'],
                ].map(([cat, amt, pct]) => (
                  <tr key={cat}>
                    <td className="font-medium text-white">{cat}</td>
                    <td>{amt}</td>
                    <td>{pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== METRICS & ACCOUNTABILITY ==================== */}
      <section id="metrics" data-section="metrics" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Metrics &amp; Accountability
          </h2>
        </div>

        {/* Mobilize Metrics */}
        <div className="glass-tile reveal mb-6">
          <h3 className="text-lg font-extrabold uppercase tracking-[-0.04em] text-white mb-4">Pillar One: Mobilize</h3>
          <div className="overflow-x-auto">
            <table className="metrics-table">
              <thead>
                <tr><th>Metric</th><th>2025</th><th>2026</th><th>2027</th><th>2028</th></tr>
              </thead>
              <tbody>
                {[
                  ['Total Members', '380', '1,000', '1,750', '2,500'],
                  ['Counties Represented', '61', '80', '95', '100'],
                  ['Social Media Followers', '~5,000', '15,000', '30,000', '50,000'],
                  ['Email Subscribers', '~500', '3,000', '6,000', '10,000'],
                  ['New Voter Registrations', '0', '2,500', '6,000', '10,000'],
                  ['Member Voter Turnout', 'N/A', '60%', '65%', '70%'],
                ].map(([metric, ...years]) => (
                  <tr key={metric}><td className="font-medium text-white">{metric}</td>{years.map((y, i) => <td key={i}>{y}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Develop Metrics */}
        <div className="glass-tile reveal mb-6">
          <h3 className="text-lg font-extrabold uppercase tracking-[-0.04em] text-white mb-4">Pillar Two: Develop</h3>
          <div className="overflow-x-auto">
            <table className="metrics-table">
              <thead>
                <tr><th>Metric</th><th>2025</th><th>2026</th><th>2027</th><th>2028</th></tr>
              </thead>
              <tbody>
                {[
                  ['Convention Attendance', '0', '150', '250+', '400'],
                  ['Leadership Training Completions', '0', '15', '350', '500'],
                  ['Young Dems Running for Office', '0', '5', '35', '50'],
                  ['Alumni in Elected Positions', '0', '0', '15', '25'],
                ].map(([metric, ...years]) => (
                  <tr key={metric}><td className="font-medium text-white">{metric}</td>{years.map((y, i) => <td key={i}>{y}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Organize Metrics */}
        <div className="glass-tile reveal mb-6">
          <h3 className="text-lg font-extrabold uppercase tracking-[-0.04em] text-white mb-4">Pillar Three: Organize</h3>
          <div className="overflow-x-auto">
            <table className="metrics-table">
              <thead>
                <tr><th>Metric</th><th>2025</th><th>2026</th><th>2027</th><th>2028</th></tr>
              </thead>
              <tbody>
                {[
                  ['Active Chapters', '8', '18', '28', '35'],
                  ['College Democrat Chapters', '4', '8', '12', '15'],
                  ['HS Democrat Chapters', '~5', '20', '35', '50'],
                  ['County Chapters', '1', '5', '12', '20'],
                  ['Chapter Retention Rate', 'N/A', '70%', '80%', '85%'],
                ].map(([metric, ...years]) => (
                  <tr key={metric}><td className="font-medium text-white">{metric}</td>{years.map((y, i) => <td key={i}>{y}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Elect Metrics */}
        <div className="glass-tile reveal mb-6">
          <h3 className="text-lg font-extrabold uppercase tracking-[-0.04em] text-white mb-4">Pillar Four: Elect</h3>
          <div className="overflow-x-auto">
            <table className="metrics-table">
              <thead>
                <tr><th>Metric</th><th>2025</th><th>2026</th><th>2027</th><th>2028</th></tr>
              </thead>
              <tbody>
                {[
                  ['Endorsed Candidates', '0', '15', '10', '25'],
                  ['Endorsed Elected', 'N/A', '10', '7', '20'],
                  ['Door Knocks (election cycle)', 'N/A', '5,000', 'N/A', '8,000'],
                  ['Peer-to-Peer Contacts', 'N/A', '100K', 'N/A', '150K'],
                  ['Youth Turnout Increase', 'N/A', '+10%', 'N/A', '+15%'],
                ].map(([metric, ...years]) => (
                  <tr key={metric}><td className="font-medium text-white">{metric}</td>{years.map((y, i) => <td key={i}>{y}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Metrics */}
        <div className="glass-tile reveal">
          <h3 className="text-lg font-extrabold uppercase tracking-[-0.04em] text-white mb-4">Financial Metrics</h3>
          <div className="overflow-x-auto">
            <table className="metrics-table">
              <thead>
                <tr><th>Metric</th><th>2025</th><th>2026</th><th>2027</th><th>2028</th></tr>
              </thead>
              <tbody>
                {[
                  ['Annual Revenue', '~$1,500', '$50K', '$75K', '$100K'],
                  ['Individual Donors', '~30', '300', '500', '750'],
                  ['Monthly Recurring Donors', '0', '100', '200', '300'],
                  ['MEC Compliance', '100%', '100%', '100%', '100%'],
                ].map(([metric, ...years]) => (
                  <tr key={metric}><td className="font-medium text-white">{metric}</td>{years.map((y, i) => <td key={i}>{y}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE & MILESTONES ==================== */}
      <section id="timeline" data-section="timeline" className="px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-8 md:mb-12">
            Timeline &amp; Milestones
          </h2>
        </div>

        <div className="glass-tile reveal mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-[-0.04em] text-white mb-5 md:mb-8">2026 Implementation Roadmap</h3>

          <div className="timeline-track">
            {[
              { quarter: 'Q1 2026', subtitle: 'January through March', items: ['All-Member Meeting (Jan 7)', 'MEC Year-End Report filing (Jan 15)', 'Boone County Young Democrats launch (Jan 19)', '"Respect MO Voters" Townhall support', 'College chapter road trip planning', 'College Democrats spring semester activation', 'Legislative session tracking and action alerts', 'HBCU outreach (Harris-Stowe, Lincoln University)', 'Legislative session lobby day'] },
              { quarter: 'Q2 2026', subtitle: 'April through June', items: ['MEC Q1 Report filing (Apr 15)', 'Candidate endorsement questionnaires released', 'Regional leadership summits (KC, STL, Columbia)', 'Legislative session wrap-up and advocacy assessment', 'Summer organizing plan launch', 'Candidate endorsement decisions begin', 'Fiscal year budget adoption (by July 1)'] },
              { quarter: 'Q3 2026', subtitle: 'July through September', items: ['MEC Q2 Report filing (Jul 15)', 'Primary election support', 'Camp Carnahan or similar training', 'Primary election day activities (August)', 'Back-to-school chapter activation', 'General election field program activation', 'Voter registration deadline push'] },
              { quarter: 'Q4 2026', subtitle: 'October through November', items: ['MEC Q3 Report filing (Oct 15)', 'MEC 8-Day Pre-General Report (Oct 27)', 'Intensive GOTV operations', 'Election Day (November 3)', 'Post-election assessment', 'End-of-year giving campaign launch'] },
            ].map((q) => (
              <div key={q.quarter} className="timeline-node reveal">
                <div className="timeline-card">
                  <div className="timeline-quarter">{q.quarter}</div>
                  <p className="text-white/60 text-xs font-medium mb-4">{q.subtitle}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 md:gap-y-2">
                    {q.items.map((item) => (
                      <div key={item} className="flex gap-2.5 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="glass-tile reveal-left">
            <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3 md:mb-4">2027 Overview</h3>
            <div className="space-y-3">
              <p className="text-white/85 text-sm"><span className="text-white font-bold">Q1:</span> Legislative session engagement, chapter development, year-end report analysis</p>
              <p className="text-white/85 text-sm"><span className="text-white font-bold">Q2:</span> Inaugural State Convention (Columbia), leadership academy launch</p>
              <p className="text-white/85 text-sm"><span className="text-white font-bold">Q3:</span> Off-year local election support, training program expansion, municipal candidate recruitment</p>
              <p className="text-white/85 text-sm"><span className="text-white font-bold">Q4:</span> Local elections GOTV, 2028 planning, candidate recruitment for state legislature</p>
            </div>
          </div>
          <div className="glass-tile reveal-right">
            <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-[-0.04em] text-white mb-3 md:mb-4">2028 Overview</h3>
            <div className="space-y-3">
              <p className="text-white/85 text-sm"><span className="text-white font-bold">Q1:</span> Legislative session, presidential primary engagement, spring voter registration</p>
              <p className="text-white/85 text-sm"><span className="text-white font-bold">Q2:</span> Expanded State Convention, intensive candidate support launches</p>
              <p className="text-white/85 text-sm"><span className="text-white font-bold">Q3:</span> General election field program (presidential + state races), maximum volunteer mobilization</p>
              <p className="text-white/85 text-sm"><span className="text-white font-bold">Q4:</span> 2028 General Election, evaluation of three-year strategic plan, 2029-2031 planning begins</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CLOSING STATEMENT ==================== */}
      <section id="closing" data-section="closing" className="px-4 md:px-8 max-w-4xl mx-auto py-12 md:py-20">
        <div className="reveal">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.06em] uppercase text-white mb-3 md:mb-4">
            Closing Statement
          </h2>
          <p className="text-white/90 text-sm md:text-lg font-bold uppercase tracking-wide mb-8 md:mb-12">The Future Begins Now</p>
        </div>

        <div className="glass-tile reveal">
          <div className="space-y-5 text-white/90 leading-relaxed font-medium">
            <p>
              Seven years of silence ended when Missouri Young Democrats returned in 2025. In our first six months, we proved that young Missourians will organize when given the opportunity: nearly 400 members across 61 counties, with presence in every congressional district, built entirely by volunteers with passion and determination.
            </p>
            <p>
              This strategic plan charts our course for the next three years. It is ambitious: 2,500 members, 35 chapters, 50 candidates supported, a broken Republican supermajority. It is comprehensive, covering everything from digital infrastructure to candidate training to financial sustainability. And it is grounded in our organizational reality.
            </p>

            <div className="pull-quote my-8">
              To the young Missourians reading this: we need you. Whatever your skills, whatever your background, whatever your political experience, there is a place for you in Missouri Young Democrats.
            </div>

            <p>
              The Republican supermajority wants us to stay silent. They want young people to believe our votes don&apos;t matter, that Missouri is a lost cause, that nothing will change. They are counting on our apathy.
            </p>

            <p className="text-white font-bold text-xl">
              They have underestimated us.
            </p>

            <p>
              Missouri Young Democrats is not just back. We are building something that has never existed in this state: sustainable, statewide infrastructure for youth political engagement that will outlast any election cycle, any individual leader, any single campaign.
            </p>

            <p className="text-white font-bold text-lg">
              But we are young. We are organized. And we are just getting started.
            </p>

            <p className="text-white font-bold">
              The future of Missouri democracy begins with us. That future begins now.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center">
            <p className="text-white/50 text-xs">Missouri Young Democrats, Dustin Bax, Treasurer | moyoungdemocrats.org</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-10 md:mt-16 reveal">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href="https://secure.actblue.com/donate/moyd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-[#273351] font-extrabold text-base md:text-lg uppercase tracking-wide rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 text-center"
            >
              Support Us
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd5Hd_cgdFmgE7f9gdIxmwXSAdxkuFuITENO_x5VkhDrtR8Ag/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-transparent text-white/80 font-bold text-sm md:text-base uppercase tracking-wide rounded-full border border-white/30 hover:border-white/60 hover:text-white hover:bg-white/5 transition-all text-center"
            >
              Become a Member
            </a>
          </div>
          <div className="mt-6">
            <DownloadButton />
          </div>
        </div>
      </section>

      <div className="h-20" />
    </>
  );
}
