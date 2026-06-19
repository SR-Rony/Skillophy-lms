import { Heading } from "@/components/shared/heading";
import Image from "next/image";
import type { TeamMember } from "@/types/team-member.types";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="group rounded-[14px] transition duration-300">
      <div className="relative h-[285px] w-full overflow-hidden sm:h-[300px] lg:h-[320px]">
        <div className="absolute inset-x-0 bottom-0 h-[82%] rounded-t-[44px] bg-[#ffd221]" />
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="scale-[1.06] object-contain object-bottom transition duration-500 group-hover:scale-[1.12]"
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 42vw, 300px"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-5 bg-gradient-to-t from-black/78 via-black/38 to-transparent px-5 pb-7 pt-20 text-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Heading as="h3" variant="team-name-inverse">
            {member.name}
          </Heading>
          <p className="mt-2 text-[12px] font-semibold text-white/85">{member.role}</p>
        </div>
      </div>

      <div className="relative min-h-[82px] overflow-hidden rounded-b-[14px] border-x border-b border-[#eee7e4] bg-white px-4 pb-5 pt-4 sm:px-5">
        <div className="transition duration-300 group-hover:-translate-y-5 group-hover:opacity-0">
          <Heading as="h3" variant="team-name">
            {member.name}
          </Heading>
          <p className="mt-2 text-[13px] font-medium text-[#4f4747]">{member.role}</p>
        </div>

        <div className="absolute inset-0 flex translate-y-4 items-center justify-center gap-5 bg-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={member.linkedinHref ?? "#"}
            aria-label={`${member.name} LinkedIn`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-[13px] font-black text-primary-dark transition hover:bg-primary hover:text-white"
          >
            in
          </a>
          <a
            href={member.facebookHref ?? "#"}
            aria-label={`${member.name} Facebook`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-[13px] font-black text-primary-dark transition hover:bg-primary hover:text-white"
          >
            f
          </a>
        </div>
      </div>
    </article>
  );
}
