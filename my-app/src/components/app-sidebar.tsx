import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
  import { Link, useLocation } from "react-router-dom"
  import { courseStructure } from "../data/LessonData"
  
  export function AppSidebar() {
    const location = useLocation();
    const currentUnitId = location.pathname.split("/")[1];
  
    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Course Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Object.entries(courseStructure).map(([unitId, unit]) => {
                  const isActiveUnit = unitId === currentUnitId
  
                  return (
                    <SidebarMenuItem key={unitId}>
                      <SidebarMenuButton asChild>
                        <Link to={`/${unitId}/${unit.lessons[0].id}`}>
                          <span>{unit.title}</span>
                        </Link>
                      </SidebarMenuButton>
  
                      {/* Sub-lessons will show if user is currently in this unit */}
                      {isActiveUnit && (
                        <div className="ml-4 mt-2">
                          {unit.lessons.map((lesson) => (
                            <SidebarMenuItem key={lesson.id}>
                              <SidebarMenuButton asChild>
                                <Link to={`/${unitId}/${lesson.id}`}>{lesson.title}</Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </div>
                      )}
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  